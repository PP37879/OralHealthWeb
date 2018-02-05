import { Component, OnInit } from '@angular/core';
import { InsertService } from '../../services/insert.service';
import { Student  } from '../../model/student';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})

export class ImportComponent {
  school_name:string;
  school_addr:string;
  std_name:string;
  gender:string;
  dateOfBirth:string;
  std_addr:string;
  nation:string;
  religion:string;
  dad_name:string;
  mom_name:string;
  dad_status:string;
  mom_status:string;
  dad_job:string;
  mom_job:string;
  parent_name:string;
  parent_phone:string;
  parent_addr:string;
  teacher:string;
  master:string;
  decay_num:string;

  std:Student;

  constructor(private int:InsertService) {
    this.std=new Student();
   }


  add(){
    this.std.school_name = this.school_name;
    this.std.school_addr = this.school_addr;
    this.std.std_name = this.std_name;
    this.std.gender = this.gender;
    this.std.dateOfBirth = this.dateOfBirth;
    this.std_addr = this.std_addr;
    this.nation = this.nation;
    this.religion = this.religion;
    this.dad_name = this.dad_name;
    this.mom_name = this.mom_name;
    this.dad_status = this.dad_status;
    this.mom_status = this.mom_status;
    this.dad_job = this.dad_job;
    this.mom_job = this.mom_job;
    this.parent_name = this.parent_name;
    this.parent_phone = this.parent_phone;
    this.parent_addr = this.parent_addr;
    this.teacher = this.teacher;
    this.master = this.master;
    this.decay_num = this.decay_num;

    this.int.ins(this.std).subscribe(
      response =>{
        if (response==true) {

        } else {
          
        }
      })

  }
}

