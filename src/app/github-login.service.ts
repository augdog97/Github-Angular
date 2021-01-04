

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
 * 6. Signup method is similar to the login method, but it uses createUserWithEmailAndPassword.
 *  - CreateUser encodes our data and sends it to a RESTFUL API on the Firebase Google Server to create a user for us. 
 *  - If the sign up is successful, we set loggedIn to true and navigate to the main users page, Else we navigate back to the signup page with the error message as route parameter. 
 * 7. getCurrentUser method has afAuth.authState return an Observable<firebase.User> to monitor out applications authentication state if there is a logged in user.
 *  - We subscribe to authState and if authStaet exists, we set loggedIn to true and naviagte to the main page, Else if it is null, it means the user has been logged out and we navigate to the Login page. 
 * 8. loggedInUser variable is used to store the current logged in user.
 *  - In the login, signup, and CurrentUser methodes, we assign authstate.uid to loggedInUser, also in logout we set loggedInUser to null to represent that there is no user currently logged in.
 *  
 */



@Injectable()
export class GitHubLoginService {
    private loggedIn = new BehaviorSubject<boolean>(false);
    loggedInUser;

    constructor(private router: Router, private afAuth: AngularFireAuth) {

    }
    get isLoggedIn(){
        return this.loggedIn.asObservable();
    }

    getCurrentUser(){
        return this.afAuth.authState.subscribe(authState => {
            if(authState) {
                this.loggedIn.next(true);
                this.loggedInUser = authState.uid;
                this.router.navigate(['Users']);
                console.log("Logged in as User:", authState.uid)
            } else {
                this.router.navigate(['/hub/login'])
            }
        })
    }

    login(username, password){
        if(username !== "&& password !==") {
            return this.afAuth.signInWithEmailAndPassword(username, password)
                . then(authState => {
                    console.log("Login-then", authState);
                    this.loggedIn.next(true);
                    this.loggedInUser = authState.user.uid;
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
        this.loggedInUser = null;
        this.router.navigate(['hub/login']);
    }
    signup(username: string, password: string) {
        return this.afAuth.createUserWithEmailAndPassword(username, password)
            .then(authState => {
                console.log("signup-then", authState);
                this.loggedIn.next(true);
                this.loggedInUser = authState.user.uid;
                this.router.navigate(['Users']);
            })
            .catch(err => {
                var errorMessage = err.message;
                this.router.navigate(['signup/' + errorMessage]);
                console.log(err);
            })
    }
}