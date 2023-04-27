import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  httpOptions:any;
  constructor(private http:HttpClient) { }
  getServices():Observable<any>{
    return this.http.get("http://localhost:4500/products")
  }
  getServicesById(id:number):Observable<any>{
    return this.http.get("http://localhost:4500/products/"+id)
  }
  getDetails(id:number):Observable<any>{
    return this.http.get("http://localhost:4500/products/"+id)
  }

  postingReview(data:any):Observable<any>{
   
    this.httpOptions =  new HttpHeaders({
      'Content-Type':  'application/json',
    })
  
  return this.http.post("http://localhost:4500/reviews",data,this.httpOptions);
  }
  gettingReview():Observable<any>{
    return this.http.get("http://localhost:4500/reviews")
  }


}
