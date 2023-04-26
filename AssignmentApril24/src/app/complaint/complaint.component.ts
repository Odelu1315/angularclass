import { Component } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent {
  fname:any;
  email:any;
  message:any;
  errors:string[]=[];
  constructor(private hs:FormService) { }

  ngOnInit(): void {
  }

  submit(){
    this.errors = []
   
    let expr=/^[a-z][a-z\._0-9]+@[a-z]+\.(com|net|co\.in|in)$/;
    if(this.fname==undefined || this.fname.length<3)
      this.errors.push("First name should be greatr than 3 characters")
    if(this.email==undefined || !expr.test(this.email))
      this.errors.push("Should be in email format")
    if(this.message==undefined || this.message.length<30)
      this.errors.push("Message should be greate than 30 characters")

      if(this.errors.length==0){
        let obj={
          id:Math.round(Math.random()*100000),
          fname: this.fname,
          email: this.email,
          message: this.message

        }
        this.hs.postForm(obj).subscribe({
          next: ()=>{
            alert("You enquiry is posted")
            this.fname="",
            this.email="",
            this.message=""
          },
          error: ()=>alert("there is a problem posting your equiry")
        }
        )
      }
  }

}
