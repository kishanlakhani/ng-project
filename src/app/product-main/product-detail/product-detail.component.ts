import { Component, OnInit, Output ,EventEmitter, Input} from '@angular/core';
import { IProductData } from '../../models/prouct.model'
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit {
  // @Output() sendProductData:EventEmitter<IProductData[]> = new EventEmitter<IProductData[]>();

  // productData:IProductData[] = [];

  constructor(private productService:ProductService,private router:Router) { }
  @Input() isChanged;
  
  ngOnInit() {
    // this.productData = this.productListsService.getProductList();    
    // this.sendProductData.emit(this.productData);
    this.productLists = this.productService.getProductList()
;  }
  
  checkUpdateData(){
    // console.log(this.productData);
  }


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

  onClickDel(id){
    // console.log(id);
    let a =confirm("Are you sure?")
    console.log(a);
    if(a==true){
      this.productService.delProduct(id) ; 

    }
  }
  onShowProduct(id){
    this.router.navigate(['/product','show',id]);
  }

  isAddProductChange(event:boolean){
    this.isAddProduct=event;
    console.log(event);
  }

}
