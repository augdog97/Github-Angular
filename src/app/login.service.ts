
import {Injectable} from '@angular/core'
import {CanActivate} from '@angular/router'

/** 
 * 1. This login service class is used behind out login form component.
 *   - The values of username and password come in from the login form.
*/

@Injectable()
export class LoginService {
    isLoggedIn: boolean = false;

    login(username,password) {
        if(username === "jason" && password === "123") {
            this.isLoggedIn = true;
        } else {
            this.isLoggedIn = false;
        }
        return this.isLoggedIn;
    }
    logout() {
        this.isLoggedIn = false;
        return this.isLoggedIn;
    }
}