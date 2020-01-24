import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { SignUpComponent } from './signup-signin/sign-up/sign-up.component';
// import { SignInComponent } from './signup-signin/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [ 
  { path:'home',component:HomeComponent },
  { path:'', redirectTo:'/home',pathMatch:'full'},
  { path:'',loadChildren:()=>import('./signup-signin/signup-signin.module').then(sub=>sub.SignupSigninModule)
    // loadChildren:'./signup-signin/signup-signin.module#SignupSigninModule'
  },
  // { path:'product',loadChildren:()=>import('./product-main/product-main.module').then(sub=>sub.ProductMainModule) },
  { path:'**',component: PageNotFoundComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
