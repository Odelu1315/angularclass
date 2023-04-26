import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  httpOptions:any;
  constructor(private http:HttpClient){

  }
  
  postForm(obj:any):Observable <any>{

      this.httpOptions =  new HttpHeaders({
        'Content-Type':  'application/json',
      })
    
    return this.http.post("http://localhost:4500/products",obj,this.httpOptions);
   }

}
