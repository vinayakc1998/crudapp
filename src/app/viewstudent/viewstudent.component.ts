import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListofstudentComponent } from '../listofstudent/listofstudent.component';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { StudentcreateComponent } from '../studentcreate/studentcreate.component';
import { StudentupdateComponent } from '../studentupdate/studentupdate.component';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {
  student:Student=new Student();
  id!:number;

  constructor(private router:Router,
    private route:ActivatedRoute,
    private studentservice:StudentService) { }

  ngOnInit(): void {
    
this.id=this.route.snapshot.params['id']
this.studentservice.getstudentbyid(this.id).subscribe(data=>
  {
    this.student=data
  });
  }
  gotohome()
  {
  this.router.navigate(['students'])
  }
  

}
