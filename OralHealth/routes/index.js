const express   = require("express");
const router    = express.Router();

const users      = require("./users");
const excel      = require("./excel");

router.use("/users",users);
router.use("/excel",excel);

router.get("/",(req,res)=>{
    console.log("this is /");
    res.send("this is home page /");
});

module.exports = router;
