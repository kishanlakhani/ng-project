import { Component, OnInit, Input, Output,EventEmitter, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { IProductData } from 'src/app/models/prouct.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-stock-status',
  templateUrl: './product-stock-status.component.html',
  styleUrls: ['./product-stock-status.component.scss']
})
export class ProductStockStatusComponent implements OnInit {
@Input() productItem:IProductData={id:0,title:"",price:0,stock:0};
@Input()  stock:number=0;  
regex=/[0-9]*/g;
  stockStatus:string = "high";
  stockValue:number=0;
  inputDefaultValue:string=""

  constructor(private  productService:ProductService,private router:Router) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  
    console.log("ngonchange")
    this.stockStatus = this.stock <= 10? "Low" : this.stock <= 20? "Average":"High" || '';
    this.inputDefaultValue = String(this.productItem.stock);
  }

  stockValueChange(event){
    // console.log(this.inputDefaultValue)
    if(!isNaN(Number(this.inputDefaultValue))){
      if( Number(this.inputDefaultValue) > 0 ){
          this.productItem.stock = Number(this.inputDefaultValue);
          this.productItem.totalPrice = this.productItem.price*this.productItem.stock;
      }
    }else{
      // this.stockStatus = '';
    }
  }
  
  onClickDel(id){
    let a =confirm("Are you sure?")
    console.log(a);
    if(a==true){
      this.productService.delProduct(id) ; 
    }
  }

  onShowProduct(id){
    this.router.navigate(['/product','show',id]);
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


