import { Component, OnInit, Input } from '@angular/core';

/*
  1. Setting data objec to the Input decorator. 
*/
 
@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
@Input() data;
  constructor() { 

  }

  ngOnInit(): void {
  }

}
