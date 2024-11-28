const express = require("express");
const {generateImage} = require("../controllers/ImageController.js");
const userAuth = require("../middeleweres/Auth.js");

const router = express.Router();

router.post('/generate-image',userAuth, generateImage);

module.exports = router;

