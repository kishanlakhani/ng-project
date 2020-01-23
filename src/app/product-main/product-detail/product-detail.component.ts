import { Component, OnInit, Output ,EventEmitter, Input} from '@angular/core';
import { IProductData } from '../../models/prouct.model'
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit {
  @Output() sendProductData:EventEmitter<IProductData[]> = new EventEmitter<IProductData[]>();

  productData:IProductData[] = [];

  constructor(private productListsService:ProductService) { }
  @Input() isChanged;
  
  ngOnInit() {
    this.productData = this.productListsService.getProductList();    
    this.sendProductData.emit(this.productData);
  }
  
  checkUpdateData(){
    console.log(this.productData);
  }


}
