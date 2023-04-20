import { Component } from '@angular/core';
import { FeedbacksService } from 'src/app/services/feedbacks.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {
  feedbacks:any;
  types:string[]=[
    "All",
    "Branding and Communication",
    "Inbound & Content Marketing",
    "Film & Webinar","Digital Marketing",
    "ECommerce & Websites",
    "Market Analysis"
  ]
  selected:string="All"

  constructor(private ff:FeedbacksService){
    this.ff.getFeedback().subscribe(
      {
        next:(data:any)=> this.feedbacks=data,
        error:()=>this.feedbacks=[]
      }
    )
  }
}
