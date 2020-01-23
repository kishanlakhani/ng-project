import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProductMainComponent } from '../product-main/product-main.component';


const routes: Routes = [
   {
    path:'signup',component:SignUpComponent
  },
  {
    path:'signin',component:SignInComponent
  },
  {
    path:'product',component:ProductMainComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupSigninRoutingModule { }
