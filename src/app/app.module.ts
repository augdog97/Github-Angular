import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { StarComponent } from './star/star.component';
import { StarfillComponent } from './starfill/starfill.component';
import { RatingComponent } from './rating/rating.component';
import { ProductComponent } from './product/product.component';
import {Truncatepipe} from './truncate.pipe';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

/** Modules */
import {GitHubModule} from './github/github.module'
import {LoginModule} from './login/login.module'

/* Routing */
import { routing } from './app.routing'
import {GitHubRouting} from './github/github.routing'

/**
 * 1. Removed the components and imports and providers for login and Github becasue they where moved to their respective modules.
 * 2. Refracted Appmodule so the code is cleaner. We will import more modules into the app.
 *  - We can now add to our githubModule and login module and have them grow independently. 
 * 3. Impored routing and also GitHubRouting file.
 *  - GithubRouting comes before the app routing in the imports array because if not then Github and Githubuser would be directed to Not Found
 */

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
    HomeComponent,
    NotfoundComponent,
    NavigationComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GitHubModule,
    GitHubRouting,
    routing,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
