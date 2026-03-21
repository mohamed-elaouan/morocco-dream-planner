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

function getEnvValue($key) {
    // Check multiple possible .env locations
    $paths = [
        __DIR__ . '/../../.env',   // project root (during dev)
        __DIR__ . '/../.env',      // one level up from api/ (on server)
        $_SERVER['DOCUMENT_ROOT'] . '/.env',  // document root
    ];
    foreach ($paths as $path) {
        if (file_exists($path)) {
            $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
            foreach ($lines as $line) {
                if (strpos(trim($line), '#') === 0) continue;
                $parts = explode('=', $line, 2);
                if (count($parts) !== 2) continue;
                $name = trim($parts[0]);
                $value = trim($parts[1], " \t\n\r\0\x0B\"'");
                if ($name === $key) return $value;
            }
        }
    }
    return null;
}

/**
 * Send an email via authenticated SMTP over SSL.
 * Pure PHP — no Composer, no PHPMailer needed.
 */
function smtpSend($host, $port, $user, $pass, $from, $to, $replyTo, $subject, $body, $isHtml = true) {
    $errors = [];

    // Connect via SSL
    $context = stream_context_create([
        'ssl' => [
            'verify_peer'       => false,
            'verify_peer_name'  => false,
            'allow_self_signed' => true,
        ]
    ]);

    $socket = @stream_socket_client(
        "ssl://$host:$port",
        $errno,
        $errstr,
        30, // timeout
        STREAM_CLIENT_CONNECT,
        $context
    );

    if (!$socket) {
        return ["ok" => false, "error" => "Connection failed: $errstr ($errno)"];
    }

    // Helper to read a server response
    $read = function () use ($socket) {
        $response = '';
        while ($line = fgets($socket, 512)) {
            $response .= $line;
            // Last line of a multi-line SMTP response has a space after the code
            if (isset($line[3]) && $line[3] === ' ') break;
        }
        return $response;
    };

    // Helper to send a command and check the response code
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

    // Read the server greeting
    $greeting = $read();
    if (intval(substr($greeting, 0, 3)) !== 220) {
        fclose($socket);
        return ["ok" => false, "error" => "Bad greeting: " . trim($greeting)];
    }

    // EHLO
    if (!$send("EHLO " . gethostname(), 250)) { fclose($socket); return ["ok" => false, "error" => implode(' | ', $errors)]; }

    // AUTH LOGIN
    if (!$send("AUTH LOGIN", 334)) { fclose($socket); return ["ok" => false, "error" => implode(' | ', $errors)]; }
    if (!$send(base64_encode($user), 334)) { fclose($socket); return ["ok" => false, "error" => "Auth username rejected: " . implode(' | ', $errors)]; }
    if (!$send(base64_encode($pass), 235)) { fclose($socket); return ["ok" => false, "error" => "Auth password rejected — check .env ContactEmail value"]; }

    // Envelope
    if (!$send("MAIL FROM:<$from>", 250)) { fclose($socket); return ["ok" => false, "error" => implode(' | ', $errors)]; }

    // Handle multiple recipients
    $recipients = array_map('trim', explode(',', $to));
    foreach ($recipients as $rcpt) {
        if (!empty($rcpt)) {
            if (!$send("RCPT TO:<$rcpt>", 250)) { fclose($socket); return ["ok" => false, "error" => implode(' | ', $errors)]; }
        }
    }

    // DATA
    if (!$send("DATA", 354)) { fclose($socket); return ["ok" => false, "error" => implode(' | ', $errors)]; }

    // Build the message headers + body
    $mime = $isHtml ? "text/html" : "text/plain";
    $message  = "From: $from\r\n";
    $message .= "To: $to\r\n";
    $message .= "Reply-To: $replyTo\r\n";
    $message .= "Subject: $subject\r\n";
    $message .= "MIME-Version: 1.0\r\n";
    $message .= "Content-Type: $mime; charset=UTF-8\r\n";
    $message .= "\r\n";
    $message .= $body;
    $message .= "\r\n.\r\n";

    fwrite($socket, $message);
    $dataResp = $read();
    $dataCode = intval(substr($dataResp, 0, 3));

    // QUIT
    fwrite($socket, "QUIT\r\n");
    fclose($socket);

    if ($dataCode !== 250) {
        return ["ok" => false, "error" => "DATA response: " . trim($dataResp)];
    }

    return ["ok" => true];
}

// ── Main ────────────────────────────────────────────────────────────────

$input = file_get_contents("php://input");
$data = json_decode($input, true);

if (!$data || !isset($data['email']) || !isset($data['name'])) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid input data. Required: name, email."]);
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

// ── SMTP Config ─────────────────────────────────────────────────────────
$smtpHost = 'mail.radmorocco.com';
$smtpPort = 465;
$smtpUser = 'contact@radmorocco.com';
$smtpPass = getEnvValue('ContactEmail');

if (!$smtpPass) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Server config error: email password not found in .env",
        "hint"    => "Create a .env file in the site root with: ContactEmail=your_password"
    ]);
    exit;
}

$sender  = $smtpUser;
$to      = "contact@radmorocco.com, info@radmorocco.com";
$subject = $tour ? "Reservation: $tour - RAD Morocco" : "Consultation: $name - RAD Morocco";

// ── HTML Email Template ─────────────────────────────────────────────────
$htmlContent = "
<html>
<head>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f9f9f9; }
    .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #eee; }
    .header { background: #1a1a1a; color: #ffffff; padding: 30px; text-align: center; }
    .header h1 { margin: 0; font-size: 24px; letter-spacing: 2px; text-transform: uppercase; color: #c4a47c; }
    .content { padding: 40px; }
    .info-card { background: #fdfaf5; border-left: 4px solid #c4a47c; padding: 20px; margin-bottom: 25px; border-radius: 0 8px 8px 0; }
    .label { font-weight: bold; color: #1a1a1a; margin-right: 10px; }
    .footer { background: #f4f4f4; color: #777; padding: 20px; text-align: center; font-size: 12px; }
    hr { border: 0; border-top: 1px solid #eee; margin: 30px 0; }
  </style>
</head>
<body>
  <div class='container'>
    <div class='header'>
      <h1>RAD MOROCCO</h1>
    </div>
    <div class='content'>
      <h2 style='color: #1a1a1a; margin-top: 0;'>New Inquiry Received</h2>
      <p>You have a new submission from your website's contact form.</p>
      
      <div class='info-card'>
        <p style='margin: 0;'><span class='label'>Name:</span> $name</p>
        <p style='margin: 10px 0;'><span class='label'>Email:</span> $email</p>
        <p style='margin: 0;'><span class='label'>Phone:</span> $phone</p>
      </div>

      <h3 style='color: #c4a47c; border-bottom: 1px solid #f0e6d6; padding-bottom: 10px;'>Submission Details</h3>
      <p><strong>Service:</strong> $service</p>
      <p><strong>Dates:</strong> $date_range</p>
      <p><strong>Guests:</strong> $guests</p>
      <p><strong>Message:</strong><br>$message</p>
      
      <hr />
      <p style='font-size: 13px; color: #999;'>This email was sent automatically from radmorocco.com.</p>
    </div>
    <div class='footer'>
      &copy; " . date('Y') . " RAD Morocco. All rights reserved.
    </div>
  </div>
</body>
</html>";

// ── Auto-reply template ─────────────────────────────────────────────────
$autoReplyHtml = "
<html>
<head>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; background-color: #f9f9f9; }
    .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 12px; border: 1px solid #eee; overflow: hidden; }
    .header { background: #1a1a1a; color: #ffffff; padding: 30px; text-align: center; }
    .header h1 { margin: 0; color: #c4a47c; letter-spacing: 2px; }
    .content { padding: 40px; text-align: center; }
    .footer { background: #f4f4f4; padding: 20px; text-align: center; font-size: 12px; color: #777; }
  </style>
</head>
<body>
  <div class='container'>
    <div class='header'>
      <h1>RAD MOROCCO</h1>
    </div>
    <div class='content'>
      <h2 style='color: #1a1a1a;'>Thank you for reaching out, $name!</h2>
      <p>We've received your inquiry regarding <strong>" . ($tour ?: $service) . "</strong>.</p>
      <p>Our team is currently reviewing your details and we will get back to you within 24 hours to finalize the arrangements.</p>
      <p style='margin-top: 30px;'>Warm regards,<br>The RAD Morocco Team</p>
    </div>
    <div class='footer'>
      Visit us at <a href='https://radmorocco.com' style='color: #c4a47c;'>radmorocco.com</a>
    </div>
  </div>
</body>
</html>";

// ── Send emails ─────────────────────────────────────────────────────────

// 1. Send notification to admins
$result = smtpSend($smtpHost, $smtpPort, $smtpUser, $smtpPass, $sender, $to, $email, $subject, $htmlContent);

if (!$result['ok']) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Failed to send email",
        "error"   => $result['error']
    ]);
    exit;
}

// 2. Send auto-reply to the user
$replyResult = smtpSend(
    $smtpHost, $smtpPort, $smtpUser, $smtpPass,
    $sender, $email, $sender,
    "We received your inquiry - RAD Morocco",
    $autoReplyHtml
);

// Return success even if auto-reply fails (the admin email was sent)
echo json_encode([
    "success"    => true,
    "message"    => "Emails sent successfully",
    "autoReply"  => $replyResult['ok'] ? "sent" : "failed: " . ($replyResult['error'] ?? 'unknown')
]);
?>
