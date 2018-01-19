const express = require("express");
const router = express.Router();

//Register
router.get('/register',(req,res,next)=>{
    res.send('User Registered');
});

//Authentication
router.get('/authenticate',(req,res,next)=>{
    res.send('User Authenticated');
});

//Profile
router.get('/profile',(req,res,next)=>{
    res.send('User Profile');
});

//Validation
router.get('/validate',(req,res,next)=>{
    res.send('User Validate');
});

module.exports = router;