import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// Simulating getting data from a server
export class ProductService {
  // Create a method call getProducts that is set to the type of string array.
  // This returns an array with the products in it.
  getProducts(): string[] {
    return ['Learning Angular', 'Pro TypeScript', 'ASP.NET'];
  }
  constructor() { }
}
