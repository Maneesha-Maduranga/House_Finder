const sendEmail = require('./sendEmail');

const emailVerification = async ({ name, email, token, origin }) => {
  let verified = `${origin}verify-Email?token=${token}&email=${email}`;

  let messege = `<p>Please Confirm Your Account By Following Link:<a href="${verified}">Link</a></p>`;
  return sendEmail({
    to: email,
    subject: 'Email Verification',
    html: `Hello ${name}
    ${messege}
    `,
  });
};

module.exports = emailVerification;
