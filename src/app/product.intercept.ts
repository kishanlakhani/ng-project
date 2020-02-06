import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
   intercept(req: HttpRequest<any>, next: HttpHandler):   Observable<HttpEvent<any>> {
       // All HTTP requests are going to go through this method
    
       console.log('INTERCEPTOR');
      const token = localStorage.getItem('id');
      let newHeaders = req.headers;
      if (token) {
         newHeaders = newHeaders.append('authtoken', token);
         newHeaders = newHeaders.append('custome-header',req.url)
         newHeaders = newHeaders.append('custome-header-params',req.urlWithParams)
      }     
      const authReq = req.clone({headers: newHeaders});
      return next.handle(authReq);
   }
}