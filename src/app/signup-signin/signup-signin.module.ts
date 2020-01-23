import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductMainModule } from '../product-main/product-main.module'

import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignupSigninComponent } from './signup-signin.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { ProductMainComponent } from '../product-main/product-main.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'auth',children:[
      {
        path:'signup',component:SignUpComponent
      },
      {
        path:'signin',component:SignInComponent
      }
    ]
  },

  {
    path:'',redirectTo:'/auth/signin',pathMatch:'full'
  },

 {
   path:'product',component:ProductMainComponent
 }
 
];

@NgModule({
  declarations: [
    SignupSigninComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ProductMainModule,
    RouterModule.forChild(routes)

  ],
  exports:[
    SignupSigninComponent
  ]
})
export class SignupSigninModule { }


