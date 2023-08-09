const express = require('express');
const router = express.Router();

const {
  registerUser,
  loginUser,
  verifyEmail,
  logoutUser,
} = require('../controller/Auth.js');

//Register User
router.post('/register', registerUser);

//Login User
router.post('/login', loginUser);

//Verify Email
router.post('/verifyEmail', verifyEmail);

//Logout User
router.get('/logout', logoutUser);

module.exports = router;
