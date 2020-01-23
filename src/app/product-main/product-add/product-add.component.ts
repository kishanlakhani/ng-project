import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IProductData } from '../../models/prouct.model';
import { ProductService } from '../../services/product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  @Output() isAddProduct:EventEmitter<boolean> = new EventEmitter<boolean>();
  isAddProductInTabel:boolean = false;
  productObj:{id:number,title:string,price:number,stock:number}={id:0,title:'',price:0,stock:0};
  isUpdate:boolean=false;
  addProductForm:FormGroup = new FormGroup({
    'title':new FormControl(this.productObj.title,Validators.required),
    'price':new FormControl(this.productObj.price,[Validators.required,Validators.min(0)]),
    'stock':new FormControl(this.productObj.stock,[Validators.required,Validators.min(0)])
  });

  constructor(private productService:ProductService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap
              // .filter(sub=>sub)
              .subscribe(params=>{
                console.log("in subscribe")
                if(params.get('id')){
                  this.productObj.id=Number(params.get("id"));
                  this.productObj.title=params.get("title");
                  this.productObj.price=Number(params.get("price"));
                  this.productObj.stock=Number(params.get("stock"));
                  this.isUpdate=true;
                }  
                // console.log(orderObj["title"])
                
              })

              this.addProductForm = new FormGroup({
                'title':new FormControl(this.productObj.title,Validators.required),
                'price':new FormControl(this.productObj.price,[Validators.required,Validators.min(0)]),
                'stock':new FormControl(this.productObj.stock,[Validators.required,Validators.min(0)])
              });
            
  }

  onGoBack(){
    this.router.navigate(['product']);
  }

  onSubmit(){
    if(this.productObj.id === 0){
      this.productService.addProduct({
        title:this.addProductForm.controls.title.value,
        price:this.addProductForm.controls.price.value,
        stock:this.addProductForm.controls.stock.value
      })
    }else{
      this.productService.updateProduct({
        id:this.productObj.id,
        title:this.addProductForm.controls.title.value,
        price:this.addProductForm.controls.price.value,
        stock:this.addProductForm.controls.stock.value
      });
      
    }

    this.router.navigate(['/product']);
  
  }
}
