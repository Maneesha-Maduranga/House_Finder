const sendEmail = require('./sendEmail');

const emailForgetPassword = async ({ name, email, token, origin }) => {
  let verified = `${origin}reset-password?token=${token}&email=${email}`;

  let messege = `<h4>Reset Your Password by Clicking Following Link:<a href="${verified}">Link</a></h4>`;
  return sendEmail({
    to: email,
    subject: 'Password Reset',
    html: `Hello ${name}
    ${messege}
    `,
  });
};

module.exports = emailForgetPassword;
