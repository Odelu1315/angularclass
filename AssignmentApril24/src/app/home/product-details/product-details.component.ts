import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  id: any;
  product: any;
  message: any;
  Form: FormGroup; // Update: define Form as a FormGroup

  constructor(
    private hs: HomeService,
    private fb: FormBuilder,
    private ar: ActivatedRoute
  ) {
    this.Form = this.fb.group({
      message: ['', [Validators.required, Validators.minLength(15)]]
    });
    this.ar.params.subscribe({
      next: (params) => {
        this.id = params['id'];
        this.readData();
      },
      error: () => (this.id = 0)
    });
  }

  readData() {
    this.hs.getServicesById(this.id).subscribe({
      next: (data: any) => (this.product = data),
      error: () => (this.product = {})
    });

    this.hs.getDetails(this.id).subscribe({
      next: (data: any) => (this.product = data),
      error: () => (this.product = {})
    });
  }

  postReview() {
    let data = {
      product: this.id,
      message: this.Form.value.message // Update: access Form.value.message
    };
    this.hs.postingReview(data).subscribe({
      next: (data: any) => {
        alert('We got your review. Thanks !');
        location.reload();
      },
      error: () => alert('Your review is not posted --Some error.')
    });
  }
}
