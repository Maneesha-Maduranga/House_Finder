const express = require('express');
const router = express.Router();

const {
  registerUser,
  loginUser,
  logoutUser,
} = require('../controller/Auth.js');

//Register User
router.post('/register', registerUser);

//Login User
router.post('/login', loginUser);

//Logout User
router.get('/logout', logoutUser);

module.exports = router;
