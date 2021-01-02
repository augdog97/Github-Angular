import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'
import {NotfoundComponent} from './notfound/notfound.component'
import {GithubComponent} from './github/github.component'
import {PortfolioComponent} from './portfolio/portfolio.component'

/**
 * 1. Import the routes and router module from the router library which provides the routing functionality.
 * 2. RouterModule has a forRoot method wich takes an array of Route definition objects. 
 *  - forRoot returns a module object and we assign it to variable routing.
 *  - We then export routing so that we can later import it in APP module. Note that Routing is declared as a const which is a good practive so that no one will modify routes making our application more reliable. 
 *  - We then pass in our array of Route definition objects into forRoot method. 
 *      - Each route definition associates a path to a component. Each route definition has at least 2 properties: path, which is the uniqure name we assign to our route, and component which specifies the associated component.
 *      - The route definition tells Angular that: if the path changes to "" then Angular will create an instance of HomeComponent and render it in the DOM. 
 */

export const routing = RouterModule.forRoot([
    {path: '', component: HomeComponent},
    {path: 'Github', component: GithubComponent},
    {path: 'Portfolio', component:PortfolioComponent},
    {path: '**', component: NotfoundComponent},
])