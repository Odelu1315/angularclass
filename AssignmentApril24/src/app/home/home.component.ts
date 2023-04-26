import { Component } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  productlist:any;
  types:string[]=[
    "All",
    "Electronics",
    "Cosmetics",
    "Groceries",
    "Books"
  ]
  selected:string="All";
  min:number=0;
  max:number=1000;

  constructor(private hs:HomeService){
    this.hs.getServices().subscribe(
      {
        next: (data:any)=> this.productlist =data,
        error: ()=> this.productlist=[]
      }
    )
  }

}
