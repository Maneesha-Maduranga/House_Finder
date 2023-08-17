const express = require('express');
const router = express.Router();

const { authentication } = require('../middleware/security');

const {
  registerUser,
  loginUser,
  verifyEmail,
  forgetPassword,
  resetPassword,
  showMe,
  logoutUser,
} = require('../controller/Auth');

//Register User
router.post('/register', registerUser);

//Login User
router.post('/login', loginUser);

//Verify Email
router.post('/verifyEmail', verifyEmail);

//Forget Passsword
router.post('/forgetPassword', forgetPassword);

//reset Passsword
router.post('/resetPassword', resetPassword);

//DashBoard Page
router.get('/showMe', authentication, showMe);

//Logout User
router.get('/logout', logoutUser);

module.exports = router;
