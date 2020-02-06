import { NgModule, Directive } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms'

import { PaginationModule } from 'ngx-bootstrap/pagination';

import  { ProductDetailComponent } from './product-detail/product-detail.component'
import { ProductStockStatusComponent } from './product-stock-status/product-stock-status.component';
import { ProductMainComponent } from './product-main.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductShowComponent } from './product-show/product-show.component';
import { HttpClientModule } from '@angular/common/http'
import { DemoDirective } from 'src/app/directive/demo.directive';
import { GreadDirective } from 'src/app/directive/gread.directive';
import { PipeModule } from 'src/app/pipe/pipe.module';
import { AuthGuard } from 'src/app/guard/auth.guard';

const router:Routes=[
  { 
    path:'',component:ProductMainComponent,
            // canActivateChild:[AuthGuard],
      children:[
      {
        path:'',component:ProductDetailComponent
      }
      ,
      {
        path:'add',component:ProductAddComponent,
        canDeactivate:[AuthGuard]
      },
      // {
      //   path:'edit/:id',component:ProductAddComponent,
        
      //   canDeactivate:[AuthGuard]

      // },
      {
        path:'show/:id',component:ProductShowComponent
      }
      
    ]
  } ,{
    path:'',component:ProductMainComponent,canActivateChild:[AuthGuard],
    children:[
      {
        path:'edit/:id',component:ProductAddComponent,
        
        canDeactivate:[AuthGuard]

      },
    ]
  }
]
@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductMainComponent,
    ProductStockStatusComponent,
    ProductAddComponent,
    ProductShowComponent,
    DemoDirective,
    GreadDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    PaginationModule.forRoot(),
    // DirectiveModule,
    PipeModule,
    RouterModule.forChild(router)
  ],

  exports : [
    ProductMainComponent,
    RouterModule
  ]
})
export class ProductMainModule {
  
 }
