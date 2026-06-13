const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, error: 'Invalid email address.' });
  }

  // Log the message (integrate Nodemailer here with your credentials)
  console.log(`📧 New Contact Message:`);
  console.log(`   From: ${name} <${email}>`);
  console.log(`   Message: ${message}`);

  /*
  // Nodemailer integration (uncomment and add credentials):
  const nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: 'YOUR_EMAIL', pass: 'YOUR_APP_PASSWORD' },
  });
  transporter.sendMail({
    from: email,
    to: 'puvanesh797@gmail.com',
    subject: `Portfolio Contact from ${name}`,
    text: message,
  });
  */

  return res.status(200).json({
    success: true,
    message: `Thanks ${name}! Your message has been received. I'll get back to you soon.`,
  });
});

module.exports = router;
