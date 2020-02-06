import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanDeactivate, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { SignUpInService } from '../services/user.service';
import { ProductAddComponent } from '../core/product-main/product-add/product-add.component';
import { ProductService } from '../services/product.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, 
                                  CanLoad,
                                  CanDeactivate<ProductAddComponent>,
                                  CanActivateChild
                                  
                                  {
  
  constructor(
    private authService:SignUpInService,
    private router:Router,
    private productService:ProductService
  ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!localStorage.getItem('id')){
        console.log("false auth")
        this.router.navigate(['auth']);
        return false;
      }
      console.log("auth true");
      return true;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      if(!localStorage.getItem('id')){
        console.log("false auth")
        this.router.navigate(['auth']);
        return false;
      }
      console.log("auth true");
      return true;
  }



  canDeactivate():boolean{
    if(confirm("are you sure you leave?")){
      return true;
    }
    return false;
  }
 


  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // console.log('child call')
    // console.log(this.productService.product);
    if(this.productService.product['id']){
      console.log('child true')
      return true;
    }
    console.log("child false")
    this.router.navigate(['','product']);
    return false;
  }
  
}
