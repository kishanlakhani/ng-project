import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
// import { ProductMainComponent } from './product-main/product-main.component';
import { ProductMainModule } from './product-main/product-main.module';
// import { SignupSigninModule } from './signup-signin/signup-signin.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent ,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    ProductMainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

