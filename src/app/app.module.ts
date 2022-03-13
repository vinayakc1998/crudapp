import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule}from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentcreateComponent } from './studentcreate/studentcreate.component';
import { StudentupdateComponent } from './studentupdate/studentupdate.component';
import { ListofstudentComponent } from './listofstudent/listofstudent.component';
import { FormsModule } from '@angular/forms';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentcreateComponent,
    StudentupdateComponent,
    ListofstudentComponent,
    ViewstudentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
