import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GithubComponent} from './github.component'
import {GitHubUserComponent} from './git-hub-user.component'
import {AuthGuard} from '../login/auth-guard.service'

/** 
 * 1. Added Github Routes from router file. This router file will only handle routes for this feature.
*/

export const GitHubRouting = RouterModule.forChild([
    { path: 'Github', component: GithubComponent, canActivate: [AuthGuard] },
    { path: 'GitHub/user/:login/:score', component: GitHubUserComponent, canActivate: [AuthGuard] },
])