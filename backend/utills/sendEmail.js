const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'nyasia.casper@ethereal.email',
    pass: 'xQe2ZZvKzFq1ZvHMPt',
  },
});

const sendMail = async ({ to, subject, html }) => {
  return transporter.sendMail({
    from: '"HouseFinder 👻" <HouseFinder@example.com>', // sender address
    to,
    subject,
    html,
  });
};

module.exports = sendMail;
