import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProductMainComponent } from '../product-main/product-main.component';
import { ProductMainModule } from '../product-main/product-main.module';
import { SignupSigninComponent } from './signup-signin.component';


const routes: Routes = [
  {
    path:'auth',children:[ 
      {
        path:'signup',component:SignUpComponent
      },
      {
        path:'signin',component:SignInComponent
      },
      {
        path:'auth',redirectTo:'/signin',pathMatch:'full'
      }
    ]
  },
  {
    // path:'',redirectTo:'/auth',pathMatch:'full'
  },
  
 
  {
    path:'',
    loadChildren:()=>import('../product-main/product-main.module').then(m=>ProductMainModule)
    // component:ProductMainComponent
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupSigninRoutingModule { }
