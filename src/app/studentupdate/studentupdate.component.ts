import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentupdate',
  templateUrl: './studentupdate.component.html',
  styleUrls: ['./studentupdate.component.css']
})
export class StudentupdateComponent implements OnInit {
  id!:number 

  constructor(
    private studentservic:StudentService,
    private router:ActivatedRoute,
    private router1:Router
  ) { }
student:Student=new Student();
  ngOnInit(): void {
   this.id=this.router.snapshot.params['id'];
   this.studentservic.getstudentbyid(this.id).subscribe(data=>{
     this.student=data
     console.log(this.student)
   });//data which is come from this method store in student.main point is subride use for becasue Overable return data and this data we assign to student object
//purpose of use on oninit methid is this method execute 1st when we go on this page
  }

  //subscride is important when we right observale in our service code
  onsubmit()
  {
    this.studentservic.updatestudent(this.id,this.student).subscribe()
    this.router1.navigate(['students'])

  }

}
