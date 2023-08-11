const jwt = require('jsonwebtoken');
//3 Days
const cookieExpire = 1000 * 60 * 60 * 24 * 3;

const createToken = ({ payload }) => {
  let token = jwt.sign(payload, process.env.JWTSECREAT, {
    expiresIn: '3d',
  });
  return token;
};

const sendCookie = (res, tokenUser) => {
  let accessToken = createToken({ payload: tokenUser });

  res.cookie('Access_Token', accessToken, {
    expires: new Date(Date.now() + cookieExpire),
    httpOnly: true,
  });
};

const verifyToken = (token) => {
  let valid = jwt.verify(token, process.env.JWTSECREAT);
  return valid;
};

module.exports = {
  createToken,
  sendCookie,
  verifyToken,
};
