import { Component } from '@angular/core';
import { ProductService } from './product.service';
import {GithubService} from './github/github.service';
/*
  1. The providers array contain the dependencies of the ProductsComponent.
    - We say that ProductService is a dependency of ProductsComponent. In general, add providers to the root module so that the same instance of a service is available everywhere.

*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {


  constructor() {
  
 }

}
