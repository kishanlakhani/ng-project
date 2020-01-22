import { Component, OnInit } from '@angular/core';
import { IProductData } from '../models/prouct.interface';

@Component({
  selector: 'app-product-main',
  templateUrl: './product-main.component.html',
  styleUrls: ['./product-main.component.scss']
})
export class ProductMainComponent implements OnInit {    
  
  title = 'input-output-assignment';
  productLists:IProductData[]=[];
  isAddProduct:boolean = false;
  getProductData(event){
    this.productLists = event;
  }

  getTotalPrice():number{
    return this.productLists.reduce((total,productList)=>{
      total += productList.price;
      return total;
    },0);
  }

  getTotalStock():number{
    return this.productLists.reduce((total,productList)=>{
      total += productList.stock;
      return total;
    },0);
  }

  getAllTotaloPrice():number{
     return this.productLists.reduce((total,productList)=>{
      total += productList.totalPrice;
      return total;       
    },0);
  }

  isAddProductChange(event:boolean){
    this.isAddProduct=event;
    console.log(event);
  }
  constructor() { }

  ngOnInit() {
  }

}
