import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';
import { IProductData } from '../models/prouct.model';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productLists: IProductData[] = [];
  i: number = 11;
  id: number;
  product:{}={
    "title": "",
    "price": null,
    "stock": null,
    "id": null
    }
  
  dbUrl:string = 'http://localhost:3000/stock';

  constructor(
      private http: HttpClient
    ) { }

  getTotalPrice() {
    this.productLists.map((producList) => {
      producList.totalPrice = producList.stock * producList.price;
    })
  }

  getProductList() {
    return this.http.get<IProductData>(this.dbUrl)
      .pipe(map((resData: IProductData) => {
        let a = [];
        for (let key in resData) {
          a.push({ ...resData[key] })
        }
        a.map((producList) => {
          producList.totalPrice = producList.stock * producList.price;
        })
        console.log(a);
        return a;
      }))
  }

  getProductById(id) {
    return this.http.get(this.dbUrl+'/' + id);
  }

  addProduct(productObj) {
    return this.http.post(this.dbUrl, productObj)  
  }

  delProduct(id1) {
    return this.http.delete(this.dbUrl + id1);
  }

  updateProductById(id,productObj){
    return this.http.put(this.dbUrl + '/'+id,productObj)
  }

}






















 // this.http.get<{[key:string]:IProductData[]}>('https://ng-project-73d97.firebaseio.com/posts.json')
      // .pipe(map(res=>{
        // let product = [];
        // console.log(res);
        // let key = Object.keys(res);
        // console.log(key);
        // product = res[key];
      //   for(const key in res){
      //     console.log({...res[key]})
      //     product.push({...res[key]})
      // }  
      // console.log("product")
      //   console.log(product);
      //   return product
      // }))
      // .subscribe(data=>{
      //   // return [{...data[Object.keys(data)]}]
      //   console.log(data);
      //   console.log(Object.keys(data));
      //   // this.productLists = [];
      //     console.log(this.productLists)

      //   for(const key in data){
      //     console.log("k")
      //       this.productLists.push({...data[key]})
      //   }       
      // });



 // this.http.get<{[key:string]:IProductData[]}>('https://ng-project-73d97.firebaseio.com/posts.json')
      // .pipe(map(res=>{
        // let product = [];
        // console.log(res);
        // let key = Object.keys(res);
        // console.log(key);
        // product = res[key];
      //   for(const key in res){
      //     console.log({...res[key]})
      //     product.push({...res[key]})
      // }  
      // console.log("product")
      //   console.log(product);
      //   return product
      // }))
      // .subscribe(data=>{
      //   // return [{...data[Object.keys(data)]}]
      //   console.log(data);
      //   console.log(Object.keys(data));
      //   // this.productLists = [];
      //     console.log(this.productLists)

      //   for(const key in data){
      //     console.log("k")
      //       this.productLists.push({...data[key]})
      // })






        // this.productLists.push({
    //   id:this.i++,
    //   title,
    //   price,
    //   stock,
    //    totalPrice: price*stock
    // });




    // this.id=this.productLists.findIndex(product=>product.id===id)
    // const a:IProductData = {
    //   id,
    //   title,
    //   price,
    //   stock,
    //   totalPrice:stock*price
    // }