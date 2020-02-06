import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  @Output() isAddProduct: EventEmitter<boolean> = new EventEmitter<boolean>();
  isAddProductInTabel: boolean = false;
  productObj: { id: number, title: string, price: number, stock: number } = { id: 0, title: '', price: 0, stock: 0 };
  productId: number = 0;
  isUpdate: boolean = false;
  addProductForm: FormGroup = new FormGroup({
    'title': new FormControl(this.productObj.title, Validators.required),
    'price': new FormControl(this.productObj.price, [Validators.required, Validators.min(0)]),
    'stock': new FormControl(this.productObj.stock, [Validators.required, Validators.min(0)])
  });


  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    // this.productId = Number(this.route.snapshot.params['id']) || 0;
    // if (this.productId) {
    //   this.productService.getProductById(+this.productId)
    //     .subscribe(res => {
    //       this.productObj = {
    //         id: +res['id'],
    //         title: res['title'],
    //         price: res['price'],
    //         stock: res['stock']
    //       };
    //     })
    //   this.isUpdate = true;
    // }
    // this.route.params.subscribe(param => {
    //   if (param['id']) {
    //     this.productService.getProductById(+this.productId)
    //       .subscribe(res => {
    //         this.productObj =  {
    //           id: +res['id'],
    //           title: res['title'],
    //           price: res['price'],
    //           stock: res['stock']
    //         }

            const title=this.productService.product['title']
            const stock=this.productService.product['stock']
            const price=this.productService.product['price']
            this.addProductForm = new FormGroup({
              'title': new FormControl(title, Validators.required),
              'price': new FormControl(stock, [Validators.required, Validators.min(0)]),
              'stock': new FormControl(price, [Validators.required, Validators.min(0)])
            });
      //     })
      // } else {
      //   this.addProductForm = new FormGroup({
      //     'title': new FormControl(this.productObj.title, Validators.required),
      //     'price': new FormControl(this.productObj.price, [Validators.required, Validators.min(0)]),
      //     'stock': new FormControl(this.productObj.stock, [Validators.required, Validators.min(0)])
      //   });

    //   }
    // })
  }

  onGoBack() {
    this.router.navigate(['product']);
  }

  onSubmit() {
    if (!this.productService.product['id']) {
      this.productService.addProduct(this.addProductForm.value)
        .subscribe(res => {
          this.router.navigate(['', 'product']);
        })
    } else {
      // console.log(this.productService.product['id'],this.addProductForm.value);
      this.productService.updateProductById(this.productService.product['id'],this.addProductForm.value)
        .subscribe(res => {
          this.router.navigate(['', 'product']);
        })
    }

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.productService.product = {
      "title": "",
      "price": null,
      "stock": null,
      "id": null
      }
  }
}









// this.productService.updateProduct({
      //   id:this.productObj.id,
      //   title:this.addProductForm.controls.title.value,
      //   price:this.addProductForm.controls.price.value,
      //   stock:this.addProductForm.controls.stock.value
      // });


// this.productService.addProduct({
      //   title:this.addProductForm.controls.title.value,
      //   price:this.addProductForm.controls.price.value,
      //   stock:this.addProductForm.controls.stock.value
      // })



    // this.route.queryParamMap
    //           // .filter(sub=>sub)
    //           .subscribe(params=>{
    //             console.log("in subscribe")
    //             if(params.get('id')){
    //               this.productObj.id=Number(params.get("id"));
    //               this.productObj.title=params.get("title");
    //               this.productObj.price=Number(params.get("price"));
    //               this.productObj.stock=Number(params.get("stock"));
    //               this.isUpdate=true;
    //             }  
    //             // console.log(orderObj["title"]) 
  // })