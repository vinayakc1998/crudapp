import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable, observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseurl:string="http://localhost:8080/student/v1/allstudent";

  private baseurl2:string="http://localhost:8080/student/v1/insertstudent";

  private baseurl3:string="http://localhost:8080/student/v1/getstudentbyid";
  private baseurl4:string="http://localhost:8080/student/v1/delete";
  private baseurl5:string="http://localhost:8080/student/v1/update";
private baseurl6:string="http://localhost:8080/student/v1/login";


  constructor(private htttpclient:HttpClient) {
  }

getallstudent():Observable<Student[]>
{
  
  
  return this.htttpclient.get<Student[]>(`${this.baseurl}`)
  
}
insertstudent(student:Student):Observable<any>
{
  return this.htttpclient.post(`${this.baseurl2}`,student)
}
 getstudentbyid(id:number):Observable<Student>
 {
   return this.htttpclient.get<Student>(`${this.baseurl3}/${id}`)
 }  
 deletestudent(id:number):Observable<any>
 {
   console.log(id)
return this.htttpclient.delete<string>(`${this.baseurl4}/${id}`)
 }

 updatestudent(id:number,student:Student):Observable<object>
 {
   console.log(id)
   console.log(student)
   return this.htttpclient.put(`${this.baseurl5}/${id}`,student)
 }



 loginstudent(student:Student):Observable<any>
 {
   return this.htttpclient.post(`${this.baseurl6}`,student)
 }



}
