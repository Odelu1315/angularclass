import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './second/home/home.component';
import { FormComponent } from './second/form/form.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"form",component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
