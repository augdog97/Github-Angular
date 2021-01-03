import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {routing} from './app.routing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { StarComponent } from './star/star.component';
import { StarfillComponent } from './starfill/starfill.component';
import { RatingComponent } from './rating/rating.component';
import { ProductComponent } from './product/product.component';
import {Truncatepipe} from './truncate.pipe';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { GithubComponent } from './github/github.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { GitHubUserComponent } from './git-hub-user/git-hub-user.component';
import { LoginComponent } from './login/login.component';

/** Services */
import {LoginService} from './login.service';
import {AuthGuard} from './auth-guard.service';
import {PreventUnsavedChanges} from './prevent-unsaved-changes-guards.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    StarComponent,
    StarfillComponent,
    RatingComponent,
    ProductComponent,
    Truncatepipe,
    JumbotronComponent,
    GithubComponent,
    HomeComponent,
    NotfoundComponent,
    NavigationComponent,
    PortfolioComponent,
    GitHubUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  providers: [LoginService, AuthGuard, PreventUnsavedChanges],
  bootstrap: [AppComponent]
})
export class AppModule { }
