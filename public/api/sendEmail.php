<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
    exit;
}

// ── Helpers ─────────────────────────────────────────────────────────────

/**
 * Send an email via authenticated SMTP over SSL/TLS.
 * Pure PHP — no Composer, no PHPMailer needed.
 */
function smtpSend($host, $port, $user, $pass, $from, $to, $replyTo, $subject, $body, $isHtml = true) {
    $errors = [];
    $enc = ($port == 465) ? 'ssl' : 'tls';

    $context = stream_context_create([
        'ssl' => [
            'verify_peer'       => false,
            'verify_peer_name'  => false,
            'allow_self_signed' => true,
        ]
    ]);

    $remote = ($enc === 'ssl') ? "ssl://$host:$port" : "tcp://$host:$port";
    
    $socket = @stream_socket_client(
        $remote,
        $errno,
        $errstr,
        15, // timeout
        STREAM_CLIENT_CONNECT,
        $context
    );

    if (!$socket) {
        return ["ok" => false, "error" => "Connection to $remote failed: $errstr ($errno)"];
    }

    $read = function () use ($socket) {
        $response = '';
        while ($line = fgets($socket, 512)) {
            $response .= $line;
            if (isset($line[3]) && $line[3] === ' ') break;
        }
        return $response;
    };

    $send = function ($cmd, $expectCode) use ($socket, $read, &$errors) {
        fwrite($socket, $cmd . "\r\n");
        $response = $read();
        $code = intval(substr($response, 0, 3));
        if ($code !== $expectCode) {
            $errors[] = "CMD '$cmd' expected $expectCode, got: " . trim($response);
            return false;
        }
        return true;
    };

    $greeting = $read();
    if (intval(substr($greeting, 0, 3)) !== 220) {
        fclose($socket);
        return ["ok" => false, "error" => "Bad greeting: " . trim($greeting)];
    }

    if (!$send("EHLO " . gethostname(), 250)) { fclose($socket); return ["ok" => false, "error" => implode(' | ', $errors)]; }

    // StartTLS if on 587
    if ($enc === 'tls') {
        if (!$send("STARTTLS", 220)) { fclose($socket); return ["ok" => false, "error" => "STARTTLS failed"]; }
        stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);
        if (!$send("EHLO " . gethostname(), 250)) { fclose($socket); return ["ok" => false, "error" => "EHLO after TLS failed"]; }
    }

    if (!$send("AUTH LOGIN", 334)) { fclose($socket); return ["ok" => false, "error" => implode(' | ', $errors)]; }
    if (!$send(base64_encode($user), 334)) { fclose($socket); return ["ok" => false, "error" => "User rejected: " . implode(' | ', $errors)]; }
    if (!$send(base64_encode($pass), 235)) { fclose($socket); return ["ok" => false, "error" => "Pass rejected: " . implode(' | ', $errors)]; }

    if (!$send("MAIL FROM:<$from>", 250)) { fclose($socket); return ["ok" => false, "error" => implode(' | ', $errors)]; }

    $recipients = array_map('trim', explode(',', $to));
    foreach ($recipients as $rcpt) {
        if (!empty($rcpt)) {
            if (!$send("RCPT TO:<$rcpt>", 250)) { fclose($socket); return ["ok" => false, "error" => implode(' | ', $errors)]; }
        }
    }

    if (!$send("DATA", 354)) { fclose($socket); return ["ok" => false, "error" => implode(' | ', $errors)]; }

    $mime = $isHtml ? "text/html" : "text/plain";
    $message  = "From: $from\r\nTo: $to\r\nReply-To: $replyTo\r\nSubject: $subject\r\nMIME-Version: 1.0\r\nContent-Type: $mime; charset=UTF-8\r\n\r\n$body\r\n.\r\n";

    fwrite($socket, $message);
    $dataResp = $read();
    $dataCode = intval(substr($dataResp, 0, 3));

    fwrite($socket, "QUIT\r\n");
    fclose($socket);

    if ($dataCode !== 250) return ["ok" => false, "error" => "DATA fail: " . trim($dataResp)];
    return ["ok" => true];
}

// ── Main ────────────────────────────────────────────────────────────────

$input = file_get_contents("php://input");
$data = json_decode($input, true);

if (!$data || !isset($data['email']) || !isset($data['name'])) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid data"]);
    exit;
}

$name       = htmlspecialchars($data['name']);
$email      = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$phone      = htmlspecialchars($data['phone'] ?? 'N/A');
$message    = htmlspecialchars($data['message'] ?? ($data['Consultation Details'] ?? ''));
$tour       = isset($data['tour']) ? htmlspecialchars($data['tour']) : null;
$date_range = htmlspecialchars($data['date_range'] ?? ($data['Selected Date'] ?? 'N/A'));
$guests     = htmlspecialchars($data['guests'] ?? 'N/A');
$service    = htmlspecialchars($data['Service Requested'] ?? ($tour ? "Experience Reservation" : "Private Consulting"));

// ── Templates ───────────────────────────────────────────────────────────

$htmlContent = "<html><body style='font-family:sans-serif;color:#333;background:#f9f9f9;padding:20px;'><div style='max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #eee;'><div style='background:#1a1a1a;padding:30px;text-align:center;color:#c4a47c;'><h1>RAD MOROCCO</h1></div><div style='padding:40px;'><h2>New Inquiry</h2><p><strong>Name:</strong> $name</p><p><strong>Email:</strong> $email</p><p><strong>Phone:</strong> $phone</p><hr><p><strong>Service:</strong> $service</p><p><strong>Dates:</strong> $date_range</p><p><strong>Guests:</strong> $guests</p><p><strong>Message:</strong><br>$message</p></div><div style='background:#f4f4f4;padding:20px;text-align:center;font-size:12px;color:#777;'>&copy; ".date('Y')." RAD Morocco</div></div></body></html>";

$autoReplyHtml = "<html><body style='font-family:sans-serif;color:#333;background:#f9f9f9;padding:20px;'><div style='max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #eee;'><div style='background:#1a1a1a;padding:30px;text-align:center;color:#c4a47c;'><h1>RAD MOROCCO</h1></div><div style='padding:40px;text-align:center;'><h2>Thank you, $name!</h2><p>We received your inquiry regarding <strong>".($tour ?: $service)."</strong>.</p><p>We will get back to you within 24 hours.</p></div><div style='background:#f4f4f4;padding:20px;text-align:center;font-size:12px;color:#777;'>radmorocco.com</div></div></body></html>";

// ── SMTP Logic with Fallbacks ───────────────────────────────────────────

$configs = [
    ['host' => 'mail.radmorocco.com', 'port' => 465, 'user' => 'contact@radmorocco.com', 'pass' => 'Contact@1984'],
    ['host' => 'mail.radmorocco.com', 'port' => 465, 'user' => 'contact@radmorocco.com', 'pass' => 'Inforadmorocco@1984'], // Swapped?
    ['host' => 'localhost', 'port' => 465, 'user' => 'contact@radmorocco.com', 'pass' => 'Inforadmorocco@1984'],
    ['host' => 'mail.radmorocco.com', 'port' => 587, 'user' => 'contact@radmorocco.com', 'pass' => 'Inforadmorocco@1984']
];

$lastErr = "None";
foreach ($configs as $c) {
    $res = smtpSend($c['host'], $c['port'], $c['user'], $c['pass'], $c['user'], "contact@radmorocco.com, info@radmorocco.com", $email, "Inquiry: $name", $htmlContent);
    if ($res['ok']) {
        smtpSend($c['host'], $c['port'], $c['user'], $c['pass'], $c['user'], $email, $c['user'], "We received your inquiry - RAD Morocco", $autoReplyHtml);
        echo json_encode(["success" => true, "message" => "Sent via {$c['host']}:{$c['port']}"]);
        exit;
    }
    $lastErr = "Attempt {$c['host']}:{$c['port']} failed: " . $res['error'];
}

http_response_code(500);
echo json_encode(["success" => false, "message" => "SMTP failed after fallback attempts.", "debug" => $lastErr]);
?>
