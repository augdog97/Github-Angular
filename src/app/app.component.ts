import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
/* Services */
import { ProductService } from './product.service';
import {GitHubLoginService} from './github-login.service';
/*
  1. The providers array contain the dependencies of the ProductsComponent.
    - We say that ProductService is a dependency of ProductsComponent. In general, add providers to the root module so that the same instance of a service is available everywhere.
  2. We import the login service, get an instance by injecting it in the constructor and in ngOnInit, we call the Login Servce.getCurrentUser so that an already authenticated user goes straight to the main page instead of having to login each time they open the app. 

*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent implements OnInit {
  isLoggedIn: Observable<boolean>

  constructor(private loginService: GitHubLoginService) {

 }
 ngOnInit() {
  this.loginService.getCurrentUser();
  this.isLoggedIn = this.loginService.isLoggedIn;
 }
 onLogout() {
   this.loginService.logout();
 }

}
