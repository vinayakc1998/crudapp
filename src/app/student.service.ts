import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { Observable, observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseurl:string="http://localhost:8080/student/v1/allstudent";

  constructor(private htttpclient:HttpClient) {
  }

getallstudent():Observable<Student[]>
{
  return this.htttpclient.get<Student[]>(`${this.baseurl}`)
  
}


   
}
