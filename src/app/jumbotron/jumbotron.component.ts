import { Component, OnInit } from '@angular/core';

/* 
  1. Using the prefix bs to stand for Bootstrap components.
*/

@Component({
  selector: 'bs-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
