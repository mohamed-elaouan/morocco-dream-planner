const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, message, tour, date_range, "Service Requested": serviceRequested, "Selected Date": selectedDate, "Consultation Details": consultationDetails, guests } = req.body;

  // Validation
  if (!name || !email || (!message && !consultationDetails)) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // SMTP Configuration (cPanel compatible)
  const transporter = nodemailer.createTransport({
    host: 'mail.radmorocco.com', // Replace with your actual SMTP host if different
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const subject = tour ? `Reservation: ${tour} - RAD Morocco` : `Consultation: ${name} - RAD Morocco`;
  
  // Dynamic content based on form type
  let detailsHtml = '';
  if (tour) {
    detailsHtml = `
      <p><strong>Tour/Experience:</strong> ${tour}</p>
      <p><strong>Dates:</strong> ${date_range}</p>
      <p><strong>Guests:</strong> ${guests || 'N/A'}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;
  } else {
    detailsHtml = `
      <p><strong>Service:</strong> ${serviceRequested || 'Private Consulting'}</p>
      <p><strong>Selected Date:</strong> ${selectedDate}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Details:</strong> ${consultationDetails || message}</p>
    `;
  }

  const htmlTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f9f9f9; }
        .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #eee; }
        .header { background: #1a1a1a; color: #ffffff; padding: 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; letter-spacing: 2px; text-transform: uppercase; color: #c4a47c; }
        .content { padding: 40px; }
        .footer { background: #f4f4f4; color: #777; padding: 20px; text-align: center; font-size: 12px; }
        .info-card { background: #fdfaf5; border-left: 4px solid #c4a47c; padding: 20px; margin-bottom: 25px; border-radius: 0 8px 8px 0; }
        .label { font-weight: bold; color: #1a1a1a; margin-right: 10px; }
        .button { display: inline-block; padding: 12px 25px; background: #c4a47c; color: #fff; text-decoration: none; border-radius: 6px; margin-top: 20px; font-weight: bold; }
        hr { border: 0; border-top: 1px solid #eee; margin: 30px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>RAD MOROCCO</h1>
        </div>
        <div class="content">
          <h2 style="color: #1a1a1a; margin-top: 0;">New Inquiry Received</h2>
          <p>You have a new submission from your website's contact form.</p>
          
          <div class="info-card">
            <p style="margin: 0;"><span class="label">Name:</span> ${name}</p>
            <p style="margin: 10px 0;"><span class="label">Email:</span> ${email}</p>
            ${phone ? `<p style="margin: 0;"><span class="label">Phone:</span> ${phone}</p>` : ''}
          </div>

          <h3 style="color: #c4a47c; border-bottom: 1px solid #f0e6d6; padding-bottom: 10px;">Submission Details</h3>
          <div style="color: #444;">
            ${detailsHtml}
          </div>

          <hr />
          <p style="font-size: 13px; color: #999;">This email was sent automatically from radmorocco.com backend.</p>
        </div>
        <div class="footer">
          &copy; ${new Date().getFullYear()} RAD Morocco. All rights reserved.
        </div>
      </div>
    </body>
    </html>
  `;

  const autoReplyTemplate = `
    <!DOCTYPE html>
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
      <div class="container">
        <div class="header">
          <h1>RAD MOROCCO</h1>
        </div>
        <div class="content">
          <h2 style="color: #1a1a1a;">Thank you for reaching out, ${name}!</h2>
          <p>We've received your inquiry regarding <strong>${tour || serviceRequested || 'Morocco Experiences'}</strong>.</p>
          <p>Our team is currently reviewing your details and we will get back to you within 24 hours to finalize the arrangements.</p>
          <p style="margin-top: 30px;">Warm regards,<br>The RAD Morocco Team</p>
        </div>
        <div class="footer">
          Visit us at <a href="https://radmorocco.com" style="color: #c4a47c;">radmorocco.com</a>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    // 1. Send to Admins
    await transporter.sendMail({
      from: `"RAD Morocco Website" <${process.env.EMAIL_USER}>`,
      to: 'contact@radmorocco.com, info@radmorocco.com',
      replyTo: email,
      subject: subject,
      html: htmlTemplate,
    });

    // 2. Send Auto-reply to User
    await transporter.sendMail({
      from: `"RAD Morocco" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'We received your inquiry - RAD Morocco',
      html: autoReplyTemplate,
    });

    return res.status(200).json({ success: true, message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Nodemailer Error:', error);
    return res.status(500).json({ success: false, message: 'Failed to send email', error: error.message });
  }
}
