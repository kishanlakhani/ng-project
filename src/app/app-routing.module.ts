import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
// import { SignUpComponent } from './signup-signin/sign-up/sign-up.component';
// import { SignInComponent } from './signup-signin/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { ProductMainComponent } from './product-main/product-main.component';


const routes: Routes = [
 
  {
    path:'home',component:HomeComponent
  },
   {
    path:'', redirectTo:'/home',pathMatch:'full'
  },
{
    path:'auth',
    loadChildren:()=>import('./signup-signin/signup-signin.module').then(sub=>sub.SignupSigninModule)
    // loadChildren:'./signup-signin/signup-signin.module#SignupSigninModule'
  },
  {
    path:'**',component: PageNotFoundComponent  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
