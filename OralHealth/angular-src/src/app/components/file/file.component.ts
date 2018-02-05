import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
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
