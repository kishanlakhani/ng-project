
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule} from '@angular/forms'
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignupSigninComponent } from './signup-signin.component';
import {SignInComponent } from './sign-in/sign-in.component';
  import { from } from 'rxjs';

@NgModule({
  declarations: [
    SignupSigninComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    SignupSigninComponent
  ]
})
export class SignupSigninModule { }


// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { SignInComponent } from './sign-in/sign-in.component';
// import { SignUpComponent } from './sign-up/sign-up.component';



// @NgModule({
//   declarations: [SignInComponent, SignUpComponent],
//   imports: [
//     CommonModule
//   ]
// })
// export class SignupSigninModule { }
