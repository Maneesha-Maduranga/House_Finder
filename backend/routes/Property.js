const express = require('express');
const router = express.Router();

//Security Packeges
const { authentication } = require('../middleware/security');

const { addProperty, uploadPropertyImages } = require('../controller/Property');

//Add Property
//@Private
router.post('/addProperty', authentication, addProperty);

//Add Property Photos
//@Private
router.post('/uplaodPropertyImages', authentication, uploadPropertyImages);

module.exports = router;
