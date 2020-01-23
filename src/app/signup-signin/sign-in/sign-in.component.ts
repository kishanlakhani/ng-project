import { Component, OnInit } from '@angular/core';
import { SignUpInService } from '../../services/user.service';
import  { ISignIn } from '../../models/user.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { type } from 'os';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signList:ISignIn[];
  isEmailShow:boolean;
  isPasswordShow:boolean;
  signInForm = new FormGroup({
    'email':new FormControl('',[Validators.required,Validators.email],this.checkMailValid.bind(this)),
    'password':new FormControl('',[Validators.required,Validators.min(8)],[])
  });
  constructor(private signInService:SignUpInService,private router:Router) { }

  ngOnInit() {
    this.isEmailShow=true;
    this.isPasswordShow=false
    this.signList = this.signInService.getSignList();
    console.log(this.signList);
  }

  checkMailValid(){
    return this.next()

  }

  next(){
    // console.log(this.signInService.checkEmail(this.signInForm.controls.email.value));
    // this.isPasswordShow =this.signInService.checkEmail(this.signInForm.controls.email.value);
    console.log(typeof this.signList.findIndex(sign=>sign.email===this.signInForm.controls.email.value));
    console.log(this.signList.findIndex(sign=>sign.email===this.signInForm.controls.email.value));
    if(this.signList.findIndex(sign=>sign.email===this.signInForm.controls.email.value) !== -1){
      console.log("aaa")
      this.isPasswordShow = true;
      this.isEmailShow = !this.isPasswordShow;
      return false;
    }
    else{

      this.isPasswordShow = false;
      this.isEmailShow = !this.isPasswordShow;
      return true;
    }
   

    // this.isPasswordShow =this.signInService.checkEmail(this.signInForm.controls.email.value);
    // this.validateEmailNotTaken(c);
  }
  onFormSubmit(){
    console.log(this.signInForm);
    
    this.router.navigate(['product']);
    
  }

  validateEmailNotTaken(contorl){
    console.log(this.signInService.checkEmail(contorl.value));
    // return this.signInService.checkEmail(contorl.value);
  }
  



}
