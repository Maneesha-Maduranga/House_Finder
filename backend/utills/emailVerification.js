const sendEmail = require('./sendEmail');

const emailVerification = async ({ name, email, token, orgin }) => {
  let messege = `<p>Please Confirm Your Account</p>`;
  return sendEmail({
    to: email,
    subject: 'Email Verification',
    html: `Hello ${name}
    ${messege}
    `,
  });
};

module.exports = emailVerification;
