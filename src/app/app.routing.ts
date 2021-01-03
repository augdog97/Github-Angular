import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'
import {NotfoundComponent} from './notfound/notfound.component'
import {GithubComponent} from './github/github.component'
import {PortfolioComponent} from './portfolio/portfolio.component'
import {GitHubUserComponent} from './git-hub-user/git-hub-user.component'
import {LoginComponent} from './login/login.component'

/** Services */
import { AuthGuard } from './auth-guard.service'
import {PreventUnsavedChanges} from './prevent-unsaved-changes-guards.service'


/**
 * 1. Import the routes and router module from the router library which provides the routing functionality.
 * 2. RouterModule has a forRoot method wich takes an array of Route definition objects. 
 *  - forRoot returns a module object and we assign it to variable routing.
 *  - We then export routing so that we can later import it in APP module. Note that Routing is declared as a const which is a good practive so that no one will modify routes making our application more reliable. 
 *  - We then pass in our array of Route definition objects into forRoot method. 
 *      - Each route definition associates a path to a component. Each route definition has at least 2 properties: path, which is the uniqure name we assign to our route, and component which specifies the associated component.
 *      - The route definition tells Angular that: if the path changes to "" then Angular will create an instance of HomeComponent and render it in the DOM. 
 * 3. Created a route path for the GitHubUser component and passed in parameters. 
 *      - if we navigated to url 'GitHub/user/gregk/45.8225' then Angular would render the GitHubUser component matching those parameters. 
 * 4. Imported and add the parameter canActivate to the signup route. 
 *  - canActivate takes in an array of guards, which means we can apply multiple guards to a given route if needed. 
 *  - If the first one returns false, then the execution stops there. Otherwise control is passed to the next guard. 
 */

export const routing = RouterModule.forRoot([
    {path: '', component: HomeComponent, canActivate:[AuthGuard]},
    {path: 'Github', component: GithubComponent, canActivate:[AuthGuard]},
    {path: 'GitHub/user/:login/:score', component: GitHubUserComponent, canActivate:[AuthGuard]},
    {path: 'login', component: LoginComponent, canDeactivate:[PreventUnsavedChanges]},
    {path: 'Portfolio', component:PortfolioComponent},
    {path: '**', component: NotfoundComponent},
])