const nodemailer = require('nodemailer');

let transporter;

async function createTransporter() {
  if (transporter) return transporter;

  // Use provided SMTP credentials if available
  if (process.env.SMTP_HOST && process.env.SMTP_USER) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT || 587,
      secure: process.env.SMTP_PORT == 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    console.log('📧 Configured real SMTP provider');
  } else {
    // Fallback to Ethereal Email for testing
    console.log('📧 No SMTP credentials found. Creating Ethereal test account...');
    const testAccount = await nodemailer.createTestAccount();
    transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
    console.log(`📧 Ethereal test account created: ${testAccount.user}`);
  }
  return transporter;
}

async function sendEmail(options) {
  const tp = await createTransporter();
  
  const mailOptions = {
    from: process.env.SMTP_FROM || '"Upcycle App" <noreply@upcycle.edu>',
    to: options.to,
    subject: options.subject,
    text: options.text,
    html: options.html,
  };

  const info = await tp.sendMail(mailOptions);
  
  console.log(`📧 Email sent to ${options.to}: ${info.messageId}`);
  
  // If using ethereal, output the preview URL
  const previewUrl = nodemailer.getTestMessageUrl(info);
  if (previewUrl) {
    console.log(`🔗 Preview URL: ${previewUrl}`);
  }

  return info;
}

module.exports = { sendEmail };
