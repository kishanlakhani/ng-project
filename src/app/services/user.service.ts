import { Injectable } from '@angular/core';
import { SIGNUPIN, SIGNUP } from '../mock-data/user-data';
import { ISignUp ,ISignIn } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SignUpInService {
  constructor() { }

  // return SIGNUPIN list of data
  getSignList():ISignIn[]{
    return SIGNUPIN;
  }
  getSignUpList():ISignUp[]{
    return SIGNUP;
  }
  
  checkDuplicateEmail(email){
    return SIGNUP.findIndex(item=>item.email==email)==-1?false:true;
  }
  
  

  checkValidUser({email,password}){
    
  }

  
  checkEmail(email){
    if(SIGNUPIN.find(signIn=>signIn.email===email)){
      return true;
    }
    else{
      return false;
    }
  }

}
