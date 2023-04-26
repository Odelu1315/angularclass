import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComplaintComponent } from './complaint/complaint.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"complaint",component:ComplaintComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
