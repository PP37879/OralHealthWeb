const express = require("express");
const path = require("path");
const xlsx = require("xlsx-to-json");
const app = express();
const excel = require('./excel');
const router    = express.Router();

router.get("/file",(req,res)=>{
    res.send('User Excel');
 xlsx({
        input:"test.xlsx",
        output:"output.json"
    },function(err,result){
        if(err){
            console.log("Error");
        }
    });
});

module.exports = router;