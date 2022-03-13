import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentcreate',
  templateUrl: './studentcreate.component.html',
  styleUrls: ['./studentcreate.component.css']
})
export class StudentcreateComponent implements OnInit {

  student:Student=new Student();
    constructor(private studentservie:StudentService,
      private router:Router) { }
msg!:string
email!:string
ms!:string
  ngOnInit(): void {
  }

 savestudent()
 {
  this.studentservie.insertstudent(this.student).subscribe(data=>{
    console.log(data)
    this.router.navigate(['/students'])
  },
  error=>
  {
console.log(this.student.email)
this.email=this.student.email

this.ms="user all ready exits with email id :-"
this.msg= this.ms.concat(this.email.toString());
  }
  );
 }


  onsubmit()
{
  console.log(this.student)
  this.savestudent()
 
}


}
