import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service'
import { IProductData } from 'src/app/models/prouct.model';
import { ActivatedRoute, RouterModule } from '@angular/router';
@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.scss']
})
export class ProductShowComponent implements OnInit {
  prodctList:IProductData[]=[];
  id:number;
  product:{};
  isLoading:boolean = false;
  constructor(private productService:ProductService,
              private route:ActivatedRoute,
              private router:RouterModule
            ) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.params['id']);
    this.productService.getProductById(this.id)
      .subscribe(res=>{
        console.log(res);
        console.log(typeof res);
        this.product = res;
      //   { "id": 1,
      //   "title": "10 Microns Limited",
      //   "price": 42,
      //   "stock": 5
      // }
    },err=>{
    });
    // this.product = this.prodctList.find(product=>product.id === this.id);
  }


}
