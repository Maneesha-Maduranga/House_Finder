const express = require('express');
const router = express.Router();
//Security
const { authentication } = require('../middleware/security');

//Controller
const { uploadProfilePic, updateProfilePic } = require('../controller/User');

router.post('/uploadProfilePic', authentication, uploadProfilePic);
router.post('/updateProfilePic', authentication, updateProfilePic);

module.exports = router;
