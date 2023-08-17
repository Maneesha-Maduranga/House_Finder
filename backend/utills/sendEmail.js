const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ACCOUNT,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendMail = async ({ to, subject, html }) => {
  return transporter.sendMail({
    from: '"HouseFinder 🏠" <HouseFinder@example.com>', // sender address
    to,
    subject,
    html,
  });
};

module.exports = sendMail;
