
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { ProductMainModule } from './product-main/product-main.module';
import { SharedModule } from './shared/shared.module';
import { SignupSigninModule } from './signup-signin/signup-signin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent 
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


// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { ProductMainComponent } from './product-main/product-main.component';
// import { SignupSigninComponent } from './signup-signin/signup-signin.component';
// import { HeaderComponent } from './shared/header/header.component';
// import { FooterComponent } from './shared/footer/footer.component';
// import { ProductAddComponent } from './product-main/product-add/product-add.component';
// import { ProductDetailComponent } from './product-main/product-detail/product-detail.component';
// import { ProductEditComponent } from './product-main/product-edit/product-edit.component';
// import { ProductStockStatusComponent } from './product-main/product-stock-status/product-stock-status.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     HomeComponent,
//     ProductMainComponent,
//     SignupSigninComponent,
//     HeaderComponent,
//     FooterComponent,
//     ProductAddComponent,
//     ProductDetailComponent,
//     ProductEditComponent,
//     ProductStockStatusComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
