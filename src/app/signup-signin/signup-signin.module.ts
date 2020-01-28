import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ProductMainModule } from '../product-main/product-main.module'

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignupSigninComponent } from './signup-signin.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductMainModule } from '../product-main/product-main.module';

const routes: Routes = [
  {
    path:'', children:[
      {
        path:'signup',component:SignUpComponent
      },
      {
        path:'signin',component:SignInComponent
      },
    
    ]
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


