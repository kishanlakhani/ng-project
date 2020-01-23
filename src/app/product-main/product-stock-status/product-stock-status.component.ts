import { Component, OnInit, Input, Output,EventEmitter, SimpleChanges } from '@angular/core';
import { IProductData } from '../../models/prouct.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-stock-status',
  templateUrl: './product-stock-status.component.html',
  styleUrls: ['./product-stock-status.component.scss']
})
export class ProductStockStatusComponent implements OnInit {
@Input() productItem:IProductData={id:0,title:"",price:0,stock:0};
  regex=/[0-9]*/g;
  stockStatus:string = "high";
  stockValue:number=0;
  inputDefaultValue:string=""
  constructor(private  productService:ProductService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.stockStatus = this.productItem.stock <= 10? "Low" : this.productItem.stock <= 20? "Average":"High";
    console.log(this.stockStatus)
    this.inputDefaultValue = String(this.productItem.stock);
  }

  stockValueChange(event){
    console.log(this.inputDefaultValue)
    if(!isNaN(Number(this.inputDefaultValue))){
      this.productItem.stock = Number(this.inputDefaultValue);
      this.stockStatus = this.productItem.stock <= 10? "Low":this.productItem.stock<=20?"Average":"High";
      // this.stockStatus = this.productItem.stock <= 10? "Low" : this.productItem.stock<=20? "Average":"High";
      this.productItem.totalPrice = this.productItem.price*this.productItem.stock;
    }
  }

  onClickDel(id){
    // console.log(id);
    this.productService.delProduct(id) ; 
  }


}





  // updateStock(){
  //   // console.log(isNaN(this.stockValue));
  //   if(!isNaN(Number(this.stockValue))){
  //     this.productItem.stock += Number(this.stockValue);
  //     this.productItem.totalPrice = this.productItem.price*this.productItem.stock;
  //     this.stockValue=0;
  //   }
  //   this.stockStatus = this.productItem.stock < 10? "Low":this.productItem.stock<20?"Average":"High";
  //   this.inputDefaultValue="";
  // }

  // stockValueChange(event){
  //   console.log(event);
  //   if(!isNaN(Number(event))){
  //     this.productItem.stock = Number(this.inputDefaultValue+ event);
  //     this.productItem.totalPrice = this.productItem.price*this.productItem.stock;
  //     // this.stockValue=0;
  //   }
  //   this.stockStatus = this.productItem.stock < 10? "Low":this.productItem.stock<20?"Average":"High";
  //   this.inputDefaultValue="";
  //   // console.log(event.target.value);
  //   this.stockValue = Number(event.target.value);
  // }


