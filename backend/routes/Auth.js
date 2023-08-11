const express = require('express');
const router = express.Router();

const {
  registerUser,
  loginUser,
  verifyEmail,
  forgetPassword,
  resetPassword,
  logoutUser,
} = require('../controller/Auth.js');

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

//Logout User
router.get('/logout', logoutUser);

module.exports = router;
