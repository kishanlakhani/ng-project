import { Injectable } from '@angular/core';
import { SIGNUPIN } from '../mock-data/user-data';
import { ISignIn } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SignUpInService {
  constructor() { }

  // return SIGNUPIN list of data
  getSignList():ISignIn[]{
    return SIGNUPIN;
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
