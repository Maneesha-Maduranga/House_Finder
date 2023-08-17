const sendEmail = require('./sendEmail');

const emailVerification = async ({ name, email, token, origin }) => {
  let verified = `${origin}/verify-email?token=${token}&email=${email}`;

  let messege = `
  <h3>Verify Your Account</h3>
  <h4>Please Confirm Your Account By Following Link:<a href="${verified}">Link</a></h4>`;
  return sendEmail({
    to: email,
    subject: 'Email Verification',
    html: `Hello ${name}
    ${messege}
    `,
  });
};

module.exports = emailVerification;
