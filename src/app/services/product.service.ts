import { Injectable } from '@angular/core';
import {PRODUCTLIST} from '../mock-data/product-data';
import { IProductData } from '../models/prouct.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productLists:IProductData[] = PRODUCTLIST ;
  i:number = 11;
  id:number;
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

  updateProduct({id,title,price,stock}){
    this.id=this.productLists.findIndex(product=>product.id===id)
    this.productLists[this.id].id=id;
    this.productLists[this.id].title=title;
    this.productLists[this.id].price=price;
    this.productLists[this.id].stock=stock;
  }

  delProduct(id1){

      this.id = this.productLists.findIndex(product=>product.id===id1);
      console.log(this.id)
      this.productLists.splice(this.id,1);
  }


  changeStock(){
    
  }
 
}
