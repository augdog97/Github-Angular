import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


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
    GithubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
