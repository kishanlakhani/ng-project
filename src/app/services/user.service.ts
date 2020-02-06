import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { logging } from 'protractor';
// import { map } from 'rxjs/operators/map';

@Injectable({
  providedIn: 'root'
})
export class SignUpInService {
  constructor(
    private http:HttpClient,
    private router:Router
  ) { }
   
  
 

  signup(userData){
    return this.http.post('http://localhost:3000/users',{
      email:userData.email,
      password:userData.password
    })
  }

  logging(userData){
    this.http.get(`http://localhost:3000/users?email=${userData.email}&password=${userData.password}`)
    
    .subscribe(r=>{
      if(r[0]){
        console.log("done")
        localStorage.setItem('id',r[0].id)
        this.router.navigate(['product']);
      }else{
        this.router.navigate(['/auth'])
      }
      console.log(r)
    },error=>{
      console.log(error)
    })
  }

  isLoggiedIn(){
    if(localStorage.getItem('id')){
      return true
    }
    this.router.navigate(['/auth'])
    return false;
  }

  logOut(){
    localStorage.removeItem('id');
    this.router.navigate(['/auth'])
  }




















  // return SIGNUPIN list of data
  // getSignList():ISignIn[]{
  //   return SIGNUPIN;
  // }
  // getSignUpList():ISignUp[]{
  //   return SIGNUP;
  // }
  
  // checkDuplicateEmail(email){
  //   return SIGNUP.findIndex(item=>item.email==email)==-1?false:true;
  // }
  
  

  // checkValidUser({email,password}){
  // }

  
  // checkEmail(email){
  //   if(SIGNUPIN.find(signIn=>signIn.email===email)){
  //     return true;
  //   }
  //   else{
  //     return false;
  //   }
  // }




}
