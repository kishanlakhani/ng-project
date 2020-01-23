import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IProductData } from '../../models/prouct.model';
import { ProductService } from '../../services/product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  @Output() isAddProduct:EventEmitter<boolean> = new EventEmitter<boolean>();
  isAddProductInTabel:boolean = false;

  addProductForm:FormGroup = new FormGroup({
    'title':new FormControl('',Validators.required),
    'price':new FormControl(0,[Validators.required,Validators.min(0)]),
    'stock':new FormControl(0,[Validators.required,Validators.min(0)])
  });

  constructor(private productService:ProductService) { }

  ngOnInit() {
  }

  onGoBack(){
    this.isAddProduct.emit(this.isAddProductInTabel);  
  }

  onSubmit(){
    this.productService.addProduct({
      title:this.addProductForm.controls.title.value,
      price:this.addProductForm.controls.price.value,
      stock:this.addProductForm.controls.stock.value

    });
  
    this.isAddProduct.emit(this.isAddProductInTabel);
    // console.log(this.addProductForm.controls.title.value);
  }
}
