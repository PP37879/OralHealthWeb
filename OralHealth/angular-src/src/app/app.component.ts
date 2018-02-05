import { Component } from '@angular/core';
import { InsertService } from './services/insert.service';
import { Student  } from './model/student';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id:string;
  sname:string;
  name:string;

  std:Student;

  constructor(private int:InsertService) {
    this.std=new Student();
   }


  add(){
    this.std.id=this.id;
    this.std.sname=this.sname;
    this.std.name=this.name;

    this.int.ins(this.std).subscribe(
      response =>{
        if (response==true) {

        } else {
          
        }
      })

  }
}
