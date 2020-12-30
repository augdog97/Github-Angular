import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {filter, debounceTime, distinctUntilChanged} from 'rxjs/operators';
/**
 * 1. formControl class has a proprty valueChanges which returns an overservable. 
 *  - Apply the filter method so that we will only call Github if the value in the input field is more than 3 characters long.
 *  - Applied the debounceTime method that waits 4 seconds between API calls.
 *  - Applied distinctUntilChanged method which lets us receive our Observable only when the text changes. 
 *  - The .pipe method allows us to execute multiple operators from left to right. 
 *  - We subscribe to the observable by calling ".subscribe" method. This way we get notified when the value in the input field changes. 
 *  - The subscribe ,ethod requires a function as an argument. THe function is called by the Observable when new data arrives (value in input field changes). 
 * 
 */

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent  {
  searchControl = new FormControl();
  constructor() { 
    this.searchControl.valueChanges
    .pipe(filter(text => text.length >= 3), debounceTime(4000), distinctUntilChanged())
    .subscribe(value => {
      console.log(value);
    })
  }

 

}
