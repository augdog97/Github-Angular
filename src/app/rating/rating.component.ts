import { Component, OnInit } from '@angular/core';

/* 
  1. Setting the property (rating) to equal 0
  2. Creating the onClick method which sets the ratingValue as an argument with type of number. 
    - Setting rating property to equal the ratingValue (2,3,4,5), see rating.html
*/

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  rating = 0;
  onClick(ratingValue: number) {
    this.rating = ratingValue;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
