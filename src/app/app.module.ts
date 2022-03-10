import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule}from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentcreateComponent } from './studentcreate/studentcreate.component';
import { StudentupdateComponent } from './studentupdate/studentupdate.component';
import { ListofstudentComponent } from './listofstudent/listofstudent.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentcreateComponent,
    StudentupdateComponent,
    ListofstudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
