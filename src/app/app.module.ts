import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
// import { ProductMainComponent } from './product-main/product-main.component';
// import { ProductMainModule } from './product-main/product-main.module';
// import { GreadDirective } from './directive/gread.directive';
// import { SignupSigninModule } from './signup-signin/signup-signin.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent ,
    HomeComponent,
    // GreadDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

