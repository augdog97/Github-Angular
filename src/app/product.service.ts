import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// Simulating getting data from a server
export class ProductService {
  // Create a method call getProducts that is set to the type of any.
  // This returns an array with the products in it.
  // product service will be called by Products Component.
  // Changing date format to Javascript object  and is used in the product component.
  getProducts() {
    return [
      {
        imageUrl: "http://loremflickr.com/150/150?random=1",
        productName: "Product 1",
        releasedDate: new Date(2016,5,30),
        description: "Cras sit amet nibh libero, in gravida... ",
        rating: 4,
        numOfReviews: 2
      }, {
        imageUrl: "http://loremflickr.com/150/150?random=2",
        productName: "Product 2",
        releasedDate: new Date(2016,10,31),
        description: "Cras sit amet nibh libero, in gravida... ",
        rating: 2,
        numOfReviews: 12
      }, {
        imageUrl: "http://loremflickr.com/150/150?random=3",
        productName: "Product 3",
        releasedDate: new Date(2016,7,30),
        description: "Cras sit amet nibh libero, in gravida... ",
        rating: 5,
        numOfReviews: 2
      }
    ];
  }
  constructor() { }
}
