const express = require("express");
const {registerUser,loginUser,userCredits, paymentRazorpay, verifyRazorpay} = require('../controllers/UserController.js');
const userAuth = require("../middeleweres/Auth.js");

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/credits',userAuth,userCredits)
router.post('/pay-razor',userAuth,paymentRazorpay)
router.post('/verify-razor',userAuth,verifyRazorpay)
module.exports = router;