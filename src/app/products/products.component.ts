import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  /* 
    1. The constructor populates our string array products. 
    2. The constructor takes in a ProductService object. We call the getProducts() method of the ProductService object and assign the results to our products array. 
      - But how do we create the Product service and pass it into the constructor? The answer is Dependency Injection. Dependency injection supplies instances of your classes that you depend on. 
      - Most dependencies classes are Services. Angular can tell which services a component needs by looking at the types of its constructor parameters. For example, the constructor of ProductsComponent needs a Product Service. So when Angular creates a ProductsComponent, it looks at the constructor and sees that we need a ProductService, it will create an instance of ProductService and then inject it into the constructor of the ProductsComponent class.
  */
  products;
  constructor(productService: ProductService) {
    this.products = productService.getProducts();
  }

  ngOnInit(): void {
  }

}
