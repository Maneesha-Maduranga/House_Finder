const express = require('express');
const router = express.Router();

//Controller
const { uploadProfilePic } = require('../controller/User');

router.post('/uploadProfilePic', uploadProfilePic);

module.exports = router;
