import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { ProductMainModule } from './product-main/product-main.module';
import { SharedModule } from './shared/shared.module';
import { SignupSigninModule } from './signup-signin/signup-signin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
// import { SignupSigninRoutingModule } from './signup-signin/signup-signin-routing.module';

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
    ProductMainModule,
    SharedModule,
    SignupSigninModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

