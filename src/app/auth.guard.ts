
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { GitHubLoginService } from './github-login.service';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';


/**
 * 1. In the canActivate interface method, we return a boolean Observable.
 *  - canActivate will be called by the route guard which waits for the Observable toresolve and check if isLoggedIn emits true.
 *  - take(1) Observable operator ensures that isLoggedIn emits only the first item and completes becasue we are only interested in checking the logged in Boolean Value from the Observable a single time. 
 *  - If the user is not logged in, we navigate to the login page and return false to restrict access to the requested page, Else it means that the user is logged and we return true thus allowing the user to access the requested page. 
 */

@Injectable()
export class authGuard implements CanActivate {
    constructor(private loginService: GitHubLoginService, private router: Router) {

    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        : Observable<boolean> {
        return this.loginService.isLoggedIn
            .pipe(take(1),
                map((isLoggedIn: boolean) => {
                    if (!isLoggedIn) {
                        this.router.navigate(['/hub/login']);
                        return false;
                    }
                    return true;
                }))
    }
}