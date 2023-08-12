const express = require('express');
const router = express.Router();

//Security Packeges
const { authentication } = require('../middleware/security');

const { addProperty } = require('../controller/Property');

//Add Property
//@Private
router.post('/addProperty', authentication, addProperty);

module.exports = router;
