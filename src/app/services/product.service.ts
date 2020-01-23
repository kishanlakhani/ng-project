import { Injectable } from '@angular/core';
import {PRODUCTLIST} from '../mock-data/product-data';
import { IProductData } from '../models/prouct.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productLists:IProductData[] = PRODUCTLIST ;
  i:number = 11;
  id;
  constructor() { }

  getTotalPrice(){
    this.productLists.map((producList)=>{
      producList.totalPrice = producList.stock*producList.price;
    })
  }

  getProductList():IProductData[]{
    this.getTotalPrice();
    return this.productLists
  }
  
  addProduct({title,price,stock}){
    console.log({title,price,stock})
    this.productLists.push({
      id:this.i++,
      title,
      price,
      stock
    });
    this.getProductList();
  }

  delProduct(id1){

      this.id = this.productLists.findIndex(product=>product.id===id1);
      console.log(this.id)
      this.productLists.splice(this.id,1);
  }
 
}
