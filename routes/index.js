const express   = require("express");
const router    = express.Router();

const user      = require("./users");


router.use("/users",user);

router.get("/",(req,res)=>{
    console.log("this is /");
    res.send("this is home page /");
});

module.exports = router;