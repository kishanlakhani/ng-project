import { Component, OnInit } from '@angular/core';
import { SignUpInService } from '../../services/user.service';
import  { ISignIn } from '../../models/user.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
    'email':new FormControl('',[Validators.required,Validators.email],this.validateEmailNotTaken.bind(this)),
    'password':new FormControl('',[Validators.required,Validators.min(8)])
  });
  constructor(private signInService:SignUpInService) { }

  ngOnInit() {
    this.isEmailShow=true;
    this.isPasswordShow=false
    this.signList = this.signInService.getSignList();
    console.log(this.signList);
  }

  next(){
    console.log(this.signInService.checkEmail(this.signInForm.controls.email.value));
    this.isPasswordShow =this.signInService.checkEmail(this.signInForm.controls.email.value);
    this.isEmailShow = !this.isPasswordShow;
  }
  onFormSubmit(){
    console.log(this.signInForm);
    
  }

  validateEmailNotTaken(contorl){
    return this.signInService.checkEmail(contorl.value);
  }
  



}
