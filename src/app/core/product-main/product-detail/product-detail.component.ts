import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProductService } from 'src/app/services/product.service';
import { IProductData } from 'src/app/models/prouct.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit {
  // @Output() sendProductData:EventEmitter<IProductData[]> = new EventEmitter<IProductData[]>();

  searchArray: string[] = [];
  maxSize = 5;
  bigTotalItems = 200;
  bigCurrentPage = 5;

  productLists = [];
  constructor(
    private productService: ProductService,
    private router: Router,
    private http: HttpClient) { }
  @Input() isChanged;


  ngOnInit() {
    console.log("product oninit call");
    this.productService.getProductList()
      .subscribe((resData: IProductData[]) => {
        this.productLists = resData;
      })
  }

  checkUpdateData() {
    // console.log(this.productData);
  }

  // productLists:IProductData[]=[];
  isAddProduct: boolean = false;

  getProductData(event) {
    this.productLists = event;
  }

  getTotalPrice(): number {
    return this.productLists.reduce((total, productList) => {
      total += productList.price;
      return total;
    }, 0);
  }

  getTotalStock(): number {
    return this.productLists.reduce((total, productList) => {
      total += productList.stock;
      return total;
    }, 0);
  }

  getAllTotaloPrice(): number {
    return this.productLists.reduce((total, productList) => {
      total += productList.totalPrice;
      return total;
    }, 0);
  }

  onClickDel(id) {
    console.log("del click");
    console.log(id);
    this.productService.delProduct(id)
      .subscribe(res => {
        console.log(res);
      })
  }

  onShowProduct(id) {
    console.log(id)
    this.router.navigate(['','product', 'show', id]);
  }

  isAddProductChange(event: boolean) {
    this.isAddProduct = event;
    console.log(event);
  }

  onSelectChange(selectValue: string) {

  }

  onheckBoxChange(e) {
    if (e.target.checked) {
      this.searchArray.push(e.target.value)
    } else {
      this.searchArray.splice(this.searchArray.indexOf(e.target.value), 1)
    }
  }



  onEditButtonClick(product){
    this.productService.product = product;
    this.router.navigate(['','product','edit',product['id']]);
    console.log(this.productService.product)
  }


}
