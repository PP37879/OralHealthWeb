import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

import * as XLSX from 'ts-xlsx';
@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  arrayBuffer: any;
  file: File;
  incomingfile(event) {
    this.file = event.target.files[0];
  }

  Upload() {
    var columnSize;
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i)
        arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      console.log(XLSX.utils.sheet_to_json(worksheet, { raw: true }));
      // console.log(XLSX.utils.decode_range(worksheet['!ref']));

      var worksheetArray = new Array();
      worksheetArray = this.sheet2arr(worksheet);
      for(var i=0;i<worksheetArray.length;i++){
        console.log("LINE :"+i+" ");
        for(var j=0;j<worksheetArray[i].length;j++){
          console.log("COL : "+j+" "+worksheetArray[i][j]);
        }
        console.log("\n");
       }
     }
    fileReader.readAsArrayBuffer(this.file);
  }

  sheet2arr(sheet){
    var result = [];
    var row;
    var rowNum;
    var colNum;
    var range = XLSX.utils.decode_range(sheet['!ref']);
    for(rowNum = range.s.r; rowNum <= range.e.r; rowNum++){
       row = [];
        for(colNum=range.s.c; colNum<=range.e.c; colNum++){
           var nextCell = sheet[
              XLSX.utils.encode_cell({r: rowNum, c: colNum})
           ];
           if( typeof nextCell === 'undefined' ){
              row.push(void 0);
           } else row.push(nextCell.w);
           console.log(nextCell);
        }
        result.push(row);
        // console.log(result);
    }
    return result;
 }


  constructor() { }

  ngOnInit() {
    // this.dataService.convertExcelToJson().subscribe(inputfile => {
    //   this.file = inputfile.file;
    //   console.log(this.file);
    // }, err => {
    //   console.log(err);
    //   return false;
    // });
  }


}
