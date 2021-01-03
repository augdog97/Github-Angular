import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { GithubComponent } from './github.component';
import { GitHubUserComponent } from './git-hub-user.component';
import { GithubService } from './github.service';

/**
 * 1. Created a module file for all of the Github files.
 * 2. Imported CommonModule instead of the BrowserModule becasue in an Angular app only the root application module AppModule should import Browser Module.
 *  - BrowserModule provides services that are essential to launch and run a browser app.
 *  - Feature modules (or sub-modules) should import common module. They need the common directives and dont need to re install the app wide providers.
 */


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule
    ],
    declarations: [
        GithubComponent,
        GitHubUserComponent
    ],
    exports: [
    ],
    providers: [
        GithubService
    ]
})
export class GitHubModule {
}