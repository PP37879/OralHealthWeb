import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  file: File;
  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

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
