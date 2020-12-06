import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// Simulating getting data from a server
export class ProductService {
  // Create a method call getProducts that is set to the type of any.
  // This returns an array with the products in it.
  // product service will be called by Products Component.
  getProducts() {
    return [
      {
        imageUrl: "http://loremflickr.com/150/150?random=1",
        productName: "Product 1",
        releasedDate: "May 31, 2016",
        description: "Cras sit amet nibh libero, in gravida... ",
        rating: 4,
        numOfReviews: 2
      }, {
        imageUrl: "http://loremflickr.com/150/150?random=2",
        productName: "Product 2",
        releasedDate: "October 31, 2016",
        description: "Cras sit amet nibh libero, in gravida... ",
        rating: 2,
        numOfReviews: 12
      }, {
        imageUrl: "http://loremflickr.com/150/150?random=3",
        productName: "Product 3",
        releasedDate: "July 30, 2016",
        description: "Cras sit amet nibh libero, in gravida... ",
        rating: 5,
        numOfReviews: 2
      }
    ];
  }
  constructor() { }
}
