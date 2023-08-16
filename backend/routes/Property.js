const express = require('express');
const router = express.Router();

//Security Packeges
const { authentication } = require('../middleware/security');

const {
  addProperty,
  uploadPropertyImages,
  getAllProperty,
  getSingleProperty,
  getLatestProperty,
} = require('../controller/Property');

//Add Property
//@Private
router.post('/addProperty', authentication, addProperty);

//Get Property Single
//@public
router.get('/getSingleProperty/:id', getSingleProperty);

//Get Latest
//@public
router.get('/getLatestProperty', getLatestProperty);

//Get Property
//@public
router.get('/getAllProperty', getAllProperty);

//Add Property Photos
//@Private
router.post('/uplaodPropertyImages', authentication, uploadPropertyImages);

module.exports = router;
