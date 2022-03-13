import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListofstudentComponent } from './listofstudent/listofstudent.component';
import { LoginComponent } from './login/login.component';
import { StudentcreateComponent } from './studentcreate/studentcreate.component';
import { StudentupdateComponent } from './studentupdate/studentupdate.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';

const routes: Routes = [
  {path : 'students', component : ListofstudentComponent}
  ,{path :'',redirectTo:'login',pathMatch:'full'}
  ,{path :'create',component:StudentcreateComponent}
  ,{path :'update/:id',component:StudentupdateComponent}
  ,{path: 'view/:id',component:ViewstudentComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
