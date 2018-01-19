const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mySql = require("mysql")
const xlsx = require("xlsx-to-json");
const app = express();
const users = require('./routes/users'); 

const port = 3000;
app.use(cors());

//Set Static Folder
app.use(express.static(path.join(__dirname,'public')));

//Body-Parser Middleware
app.use(bodyParser.json());

app.use('/users',users);

//Index Route
app.get('/',(req,res)=>{
    res.send('Invalid Endpoint');
});
//Start Server
app.listen(port,()=>{
    console.log('Server started on port '+port);
    xlsx({
        input:"sample.xlsx",
        output:"output.json"
    },function(err,result){
        if(err){
            console.log("Error");
        }
    });
});
