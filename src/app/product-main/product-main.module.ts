import { NgModule, Directive } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms'

import  { ProductDetailComponent } from './product-detail/product-detail.component'
import { ProductStockStatusComponent } from './product-stock-status/product-stock-status.component';
import { ProductMainComponent } from './product-main.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductShowComponent } from './product-show/product-show.component';
import { DirectiveModule  } from '../directive/directive.module';
import { PipeModule } from '../pipe/pipe.module';

const router:Routes=[
  { 
    path:'',component:ProductMainComponent,children:[
      {
        path:'',component:ProductDetailComponent
      },
      {
        path:'add',component:ProductAddComponent
      },
      {
        path:'edit/:id',component:ProductAddComponent
      },
      {
        path:'show/:id',component:ProductShowComponent
      }
    ]
  }
  // ,
  // {
  //   path:'',redirectTo:'/product',pathMatch:'full'
  // }
]

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductMainComponent,
    ProductEditComponent,
    ProductStockStatusComponent,
    ProductAddComponent,
    ProductShowComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DirectiveModule,
    PipeModule,
    RouterModule.forChild(router)
  ],

  exports : [
    ProductMainComponent,
    RouterModule
  ]
})
export class ProductMainModule { }
