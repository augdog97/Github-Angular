import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {filter, debounceTime, distinctUntilChanged} from 'rxjs/operators';
import { GithubService } from '../github.service';
/**
 * 1. formControl class has a proprty valueChanges which returns an overservable. 
 *  - Apply the filter method so that we will only call Github if the value in the input field is more than 3 characters long.
 *  - Applied the debounceTime method that waits 4 seconds between API calls.
 *  - Applied distinctUntilChanged method which lets us receive our Observable only when the text changes. 
 *  - The .pipe method allows us to execute multiple operators from left to right. 
 *  - We subscribe to the observable by calling ".subscribe" method. This way we get notified when the value in the input field changes. 
 *  - The subscribe ,ethod requires a function as an argument. THe function is called by the Observable when new data arrives (value in input field changes). 
 *   2. Import the Github service and add it to the Providers array to be used for Dependency Injection.
    - Angular looks at the constructor and sees a paramete of type GitHubService and seeks to create an instance of it.
    - To let the injector know where to find the GitHubService to create it, we register the GitHubService by specifiying it in the providers property in the components metadata.
  3. We use our service in the constructor. WE call the getGitHubData method with the argument 'greg' from the _githubService instance.
    - the getGitHubData method returns an Observable which we need to subscribe to.
    - We then pass in our call back function for the subscribe which logs out the data.
  4. Using ngOnInit interface to run server code. Constructors are supposed to be light weight
  5. Created a property of is loading and set it to true while info from server is loaded.
    - set it to false in subscrive method because data from server was fetched.
  6. Define the users array which is populated with the user information.
    - We then subscribe to our Observable returned from our GithubService. and assign the returned result to users array.
    - We assign it data.items as this is the users item array structered in the json response. 
  7. We use the value from the input field to render the API data. No need to hardcode a name
 */

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  providers: [GithubService]
})
export class GithubComponent  {
  users =[];
  isLoading = false;
  
  searchControl = new FormControl();
  constructor(private _githubService: GithubService) { 

  }
  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(filter(text => text.length >= 3), debounceTime(4000), distinctUntilChanged())
      .subscribe(value => {
        this.isLoading = true;
        this._githubService.getGitHubData(value)
          .subscribe(data => {
            this.isLoading = false;
            this.users = data.items;
            console.log(data.items)
          });
      })
     
  }
 

}
