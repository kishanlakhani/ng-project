import { Component, OnInit } from '@angular/core';
import { IProductData } from '../models/prouct.model';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-main',
  templateUrl: './product-main.component.html',
  styleUrls: ['./product-main.component.scss']
})
export class ProductMainComponent implements OnInit {    
  
  title = 'input-output-assignment';
  
  ngOnInit() {
  }


}
