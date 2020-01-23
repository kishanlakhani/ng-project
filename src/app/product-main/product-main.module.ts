import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'

import  { ProductDetailComponent } from './product-detail/product-detail.component'
import { ProductStockStatusComponent } from './product-stock-status/product-stock-status.component';
import { ProductMainComponent } from './product-main.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { Routes, RouterModule } from '@angular/router';

const router:Routes=[
  { 
    path:'',children:[
      {
        path:'add',component:ProductAddComponent
      },
      {
        path:'edit',component:ProductAddComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductMainComponent,
    ProductEditComponent,
    ProductStockStatusComponent,
    ProductAddComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(router)
  ],

  exports : [
    ProductMainComponent
    // StockStatusComponent,
    // ProductDetailComponent
  ]
})
export class ProductMainModule { }
