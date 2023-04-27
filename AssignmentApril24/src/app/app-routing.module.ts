import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { ProductDetailsComponent } from './home/product-details/product-details.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"complaint",component:ComplaintComponent},
  {path:"productdetails/:id",component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
