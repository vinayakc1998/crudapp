import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  

  constructor(private studentservice:StudentService,
    private router:Router) { }

  ngOnInit(): void {
   this.getallstudnet();
}
//ngmethod run first
  getallstudnet() {
    this.studentservice.getallstudent().subscribe(data=>{
      this.students=data;
    
    });
  }

  updatestudent(id:number)
  {
    this.router.navigate(['update',id])
  }
  deletestudent(id:number)
  {
    console.log(id)
    this.studentservice.deletestudent(id).subscribe(data=>
      
      {console.log(data)
      }
    );
    this.router.navigate(['students'])
  }
  toredirectallstudent()
  {
    this.router.navigate(['/students'])
  }


  viewstudent(id:number)
  {
    console.log(id)
    this.router.navigate(['/view',id])
  }
}