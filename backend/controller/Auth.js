// Models
const { User, userValidator } = require('../Model/User');

// Helpers
const CustomError = require('../utills/customError');
const emailVerification = require('../utills/emailVerification');
const emailForgetPassword = require('../utills/emailForgetPassword');
const { sendCookie } = require('../utills/Jwt');
//Crypto
const Crypto = require('crypto');

//All Authentication Functions

const registerUser = async (req, res) => {
  const { username, email, password, phoneNumber } = req.body;

  const { error } = userValidator(username, email, password, phoneNumber);

  if (error) {
    throw new CustomError(error.message, 400);
  }

  let user = await User.findOne({ email });
  // Check user Allready Exist
  if (user) {
    throw new CustomError('Email Is Allready Used.Try Another One', 400);
  }

  let token = Crypto.randomBytes(20).toString('hex');

  user = await User.create({
    username,
    email,
    password,
    phoneNumber,
    verifyToken: token,
  });

  let origin = ' http://localhost:5173/';

  await emailVerification({
    name: user.username,
    email: user.email,
    origin: origin,
    token: user.verifyToken,
  });

  res.status(201).json({
    message: 'Please Verify The Email',
    token: user.verifyToken,
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  let user = await User.findOne({ email });

  if (!user) {
    throw new CustomError(
      'User Is Not Found With Email,Try again with register',
      404
    );
  }

  let isMatched = await user.validatePassword(password);

  if (!isMatched) {
    throw new CustomError('Password Is Incorrect', 400);
  }

  if (!user.isVerifeid) {
    throw new CustomError('Please Verify the Email', 401);
  }

  let tokenUser = {
    id: user._id,
    name: user.username,
    email: user.email,
    role: user.role,
    phoneNumber: user.phoneNumber,
  };

  sendCookie(res, tokenUser);

  res.status(200).json({
    sucess: true,
    data: tokenUser,
  });
};

const verifyEmail = async (req, res) => {
  const { token, email } = req.body;

  let user = await User.findOne({ email });

  if (!user) {
    throw new CustomError('No User Find With Given Email', 404);
  }
  if (token !== user.verifyToken) {
    throw new CustomError('Verification Failed', 400);
  }
  user.isVerifeid = true;
  user.verifiedAt = Date.now();

  await user.save();

  res.status(200).json({
    message: 'Email is Verified',
  });
};

const forgetPassword = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    throw new CustomError('Please Provide Valid Email', 400);
  }

  let user = await User.findOne({ email: email });
  if (user) {
    let passwordToken = Crypto.randomBytes(30).toString('hex');
    //email send
    let origin = ' http://localhost:5173/';

    await emailForgetPassword({
      name: user.username,
      email: user.email,
      origin: origin,
      token: passwordToken,
    });
    let time = 1000 * 60 * 10;
    let passwordTokenExpire = new Date(Date.now() + time);
    user.passwordToken = passwordToken;
    user.passwordTokenExpire = passwordTokenExpire;
    await user.save();
  }

  res.status(200).json({
    sucess: true,
    message: 'Please Check your Email for password reset Link',
  });
};

const resetPassword = async (req, res) => {
  const { email, token, password } = req.body;
  if (!email || !token || !password) {
    throw new CustomError('Please Provide Values For reset Password');
  }
  let user = await User.findOne({ email: email });
  if (user) {
    let time = new Date();
    if (user.passwordTokenExpire <= time) {
      throw new CustomError('Reset Password Link expired', 400);
    }
    if (user.passwordToken !== token) {
      throw new CustomError('Reset Password Token Invalid', 400);
    }
    user.password = password;
    user.passwordToken = null;
    user.passwordTokenExpire = null;
    await user.save();
  }
  res.status(200).json({
    sucess: true,
    message: 'Password Updated Succesfully',
  });
};

const showMe = async (req, res) => {
  res.send(req.user);
};

const logoutUser = async (req, res) => {
  res.cookie('Access_Token', '', {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    sucess: true,
  });
};

module.exports = {
  registerUser,
  loginUser,
  verifyEmail,
  forgetPassword,
  resetPassword,
  showMe,
  logoutUser,
};
