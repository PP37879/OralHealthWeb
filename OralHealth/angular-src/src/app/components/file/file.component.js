function handleFile(){
var xlsx = require("xlsx-to-json");
    
    xlsx({
        input:"sample.xlsx",
        output:"output.json"
    },function(err,result){
        if(err){
            console.log("Error");
        }
    });
}