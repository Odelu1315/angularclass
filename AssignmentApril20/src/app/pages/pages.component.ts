import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {
  productlist:any;
  types:string[]=[
    "All",
    "Electronics",
    "Cosmetics",
    "Groceries",
    "Books"
  ]
  selected:string="All"
  constructor(private hs:ProductService){
    this.hs.getProducts().subscribe(
      {
        next:(data:any)=> this.productlist=data,
        error:()=>this.productlist=[]
      }
    )
  }
}
