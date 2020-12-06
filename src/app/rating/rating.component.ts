import { Component, OnInit, Input } from '@angular/core';

/* 
  1. Setting the property (rating) to equal 0
    - Assigning the @Input Decorator which allows the property to be seen from the outside to be available for event binding or property binding.
  2. Adding a numOfReviews property to be used on the product component. 
  3. Creating the onClick method which sets the ratingValue as an argument with type of number. 
    - Setting rating property to equal the ratingValue (2,3,4,5), see rating.html
*/

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() rating = 0;
  @Input() numOfReviews = 0;

  onClick(ratingValue: number) {
    this.rating = ratingValue;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
