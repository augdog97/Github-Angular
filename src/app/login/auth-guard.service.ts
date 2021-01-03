import {Injectable} from '@angular/core'
import {CanActivate, Router} from '@angular/router'

import {LoginService} from './login.service'

/**
 * 1. Import Router and LoginService and use Dependency Injection to get an instance of these two classes.
 * 2. Within canActivate() we check if isLoggedIn in logService is true, if true we allow the route to continue the navigation.
 *  - If false we navigate to the login page and return false so that the request page remains inaccessible. 
 */

 @Injectable()
 export class AuthGuard implements CanActivate {
     constructor(private _router: Router, private _loginService: LoginService) {

     }
     canActivate():boolean {
         if(this._loginService.isLoggedIn) {
             return true;
         } else {
             // imperative navigation
             this._router.navigate(['login']);
             return false;
         }
       
     };
 }