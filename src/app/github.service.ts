import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {Injectable} from '@angular/core'

/**
 * 1. getGitHubData is a method that wull return GitHub data from our api end point. To call the api end point, we need to use HttpClient service of Angular. We import it with the above statment. 
 * 2. Declare GitHubUser interface. The interface is used to descrive the expected type of response returned from GitHub. 
 *  - We are only extracting the html_url, avatar_url, login, and score fields.
 * 3. Injected the HttpClient into the constructor using dependency injection. 
 *  - let Angular create an instance of the the HTTPClient class for us and give it to us.
 *  - The constructor has one parameter which is of type HttpClient, by convention we prefix private fields with an underscore "_thing"
 * 4. In getGitHubData we the get() method of the HttpClient and give the url of our api endpoint. 
 *  - We have the search term provided by the user from an input. 
 *  - The return type of get() is an Observable of <GithubUser>.
 *      - By specifying <GithubUser> type, we indicate the type of the reponse wrapped inside the Observable. 
 *      - We will return this Observable in our service and our component will be the consumer of this Observable. 
 *      - We will subscribe to it and when an ajax call is completed, the response is fed to the Observable and then pushed to the component.  
 * 5. Making the Github Service available for Dependency Injection by decorating the class with the @injectable
 */

export interface GithubUser {
    html_url: string; 
    avatar_url: string;
    login: string;
    score: string;
    items: any;
}
@Injectable()
export class GithubService {
    constructor(private _http: HttpClient) {

    }
    getGitHubData(_searchTerm):Observable<GithubUser> {
        return this._http.get<GithubUser>
        ("https://api.github.com/search/users?q=" + _searchTerm)
    }
}