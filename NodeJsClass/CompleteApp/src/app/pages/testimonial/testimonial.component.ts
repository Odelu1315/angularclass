import { Component } from '@angular/core';
import { FeedbacksService } from 'src/app/services/feedbacks.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {
  feedbacklist:any;
  constructor(private ff:FeedbacksService){
    this.ff.getFeedback().subscribe(
      {
        next:(data:any)=> this.feedbacklist=data,
        error:()=>this.feedbacklist=[]
      }
    )
  }

}
