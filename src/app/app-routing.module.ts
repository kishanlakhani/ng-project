import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { ProductMainModule } from './core/product-main/product-main.module';
import { HomeComponent } from './core/home/home.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [ 
  { path:'',component:HomeComponent },

  { path:'home',redirectTo:'/',pathMatch:'full' },
 
  {
    path:'auth',loadChildren:()=>import('./core/auth/auth.module').then(m=>m.AuthModule)
  },
   {
    path:'product',
    loadChildren: ()=>import('./core/product-main/product-main.module').then(m=>m.ProductMainModule),
    canActivate:[AuthGuard]
  },
  { path:'**',component: PageNotFoundComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
