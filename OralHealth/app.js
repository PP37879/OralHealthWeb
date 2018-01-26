const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mySql = require("mysql")
const xlsx = require("xlsx-to-json");
const app = express();
const users = require('./routes/users');
const excel = require('./routes/excel');
const index = require("./routes/index") ;

//port number
const port = 3000;

//CORS middleware
app.use(cors());

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

//Body-Parser Middleware
app.use(bodyParser.json());

app.use("/",index);


//Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

//start server
app.use(bodyParser.urlencoded({
    extended: true
}));


app.listen(port, () => {
    console.log('Server started on port ' + port);
    // xlsx({
    //     input:"sample.xlsx",
    //     output:"output.json"
    // },function(err,result){
    //     if(err){
    //         console.log("Error");
    //     }
    // });
});

// function callExcel() {
//     xlsx('test.xlsx', function (err, data) {
//         if (err) throw err;
//         //console.log(jsonDataArray(data));
//         console.log(JSON.stringify(convertToJSON(data)));
//         //console.log(data);
//     });
// };

// function convertToJSON(array) {
//     var first = array[0].join()
//     var headers = first.split(',');

//     var jsonData = [];
//     for (var i = 1, length = array.length; i < length; i++) {

//         var myRow = array[i].join();
//         var row = myRow.split(',');

//         var data = {};
//         for (var x = 0; x < row.length; x++) {
//             data[headers[x]] = row[x];
//         }
//         jsonData.push(data);

//     }
//     return jsonData;
// };

