import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-listofstudent',
  templateUrl: './listofstudent.component.html',
  styleUrls: ['./listofstudent.component.css']
})
export class ListofstudentComponent implements OnInit 
{

  students!: Student[];
  

  constructor(private studentservice:StudentService) { }

  ngOnInit(): void {
   this.getallstudnet();
}
  getallstudnet() {
    this.studentservice.getallstudent().subscribe(data=>{
      this.students=data
    });
  }
}