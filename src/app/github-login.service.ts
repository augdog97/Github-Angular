

import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs'

/**
 * 1. In the login() method, we import, inject (in constructor), and call the AngularFireAuth librarys signinWithEmailAndPassword which asynchronously signs in using the provided email and password.
 * 2. If the signin is successful, we proceed to then clasue which sets loggedin.next(true) and calls this.router.navigate to route to the main page. loggedin is a variable of type BehaviorSubject as declared in our class.
 *  - Used loggedIn to represent if a user is logged in or not.
 *  - loggedIn is of type BehaviorSubject, which keeps the latest login boolean cached.
 *  - Observers subscrive to it to receive the last emitted login status.
 *  - When the login is successful, we emit that the user is now logged in (by setting the value in loggedIn to true) and redirects the routing to the main page of users.
 * 3. If the sign in fails, we then navigate back to the login form and pass along an error message parameter with the error message to be rendered to the user.
 * 4. When the user logs out of the application, we emit that the user is no longer logged in (by setting the value to false)
 *  - called afAuth.signOut() and redirects to the login page.
 * 5. In the getter method 'get isLoggedIn' we expose logged in as an Observable so that when an Observer subscribes to isLoggedIn(), the latest cached loggedIn value will be emitted. 
 */



@Injectable()
export class GitHubLoginService {
    private loggedIn = new BehaviorSubject<boolean>(false);
    
    constructor(private router: Router, private afAuth: AngularFireAuth) {

    }
    get isLoggedIn(){
        return this.loggedIn.asObservable();
    }
    login(username, password){
        if(username !== "&& password !==") {
            return this.afAuth.signInWithEmailAndPassword(username, password)
                . then(authState => {
                    console.log("Login-then", authState);
                    this.loggedIn.next(true);
                    this.router.navigate(['/Users']);
                })
                .catch(err => {
                    this.router.navigate(['hub/login/' + err.message]);
                    console.log(err);
                });
        }
    }
    logout() { 
        this.loggedIn.next(false);
        this.afAuth.signOut();
        this.router.navigate(['hub/login']);
    }
}