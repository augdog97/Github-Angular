import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

/**
 * 1. Import and inject Router into the constructor of HomeComponent. 
 * 2. in the onClick method we call the naviaget method of Router which takes in a route parameters array similar to the routes we have implemented earlier.
 *  - The 1st element of the array will be the name of the target route and we supply any parameters in the 2nd element of the array. 
 */
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

    onClick() {
      this._router.navigate(['Github'])
    }
}
