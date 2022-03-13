import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


student:Student=new Student();
msg!:string;

  constructor(
    private studentservice:StudentService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }
onsubmit()
{
this.studentservice.loginstudent(this.student).subscribe(data=>
  {
console.log(data)
this.router.navigate(['students'])


  }
  ,
  error=>
  {
console.log(error);
this.msg="chukiche email and password takle aahe apn"


  });
}


gotstudentlist()
{
  console.log("in go to studnet")
  this.router.navigate(['students'])
}
}
