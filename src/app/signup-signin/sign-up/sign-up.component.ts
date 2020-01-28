import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { SignUpInService } from '../../services/user.service';
import { ISignUp, ISignIn } from 'src/app/models/user.model';
import { SIGNUP, SIGNUPIN } from '../../mock-data/user-data'
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm:FormGroup;
  signUpList:ISignUp[];
  signInList:ISignIn[];
  Data: Array<{name:string,value:string}> = [
    { name: 'reading', value: 'Reading' },
    { name: 'sport', value: 'Sport' },
    { name: 'drinking', value: 'Drinking' },
    { name: 'singing', value: 'Singing' },
  ];

  constructor(private userService:SignUpInService,
              private router:Router) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'username':new FormControl('',[Validators.required]),
      'password':new FormControl('',[Validators.required,Validators.min(8)]),
      'cpassword':new FormControl('',[Validators.required]),
      'birthdate':new FormControl('',[Validators.required]),
      'email':new FormControl('',[Validators.required]),
      'gender':new FormControl('male',[Validators.required]),
      'checkArray':new FormArray([],[Validators.required])
    });
    this.signUpList=this.userService.getSignUpList();
   this.signInList=this.userService.getSignList();
  }

  onFormSubmit(){
   let isDupliteEmail = this.signUpForm.controls.email.value;
    
    if(this.userService.checkDuplicateEmail(isDupliteEmail)){
      console.log("Email already taken")
    }else{
      this.signUpList.push({
        username: this.signUpForm.controls.username.value,
        password: this.signUpForm.controls.password.value,
        cpassword: this.signUpForm.controls.cpassword.value,
        birthdate: new Date(this.signUpForm.controls.birthdate.value).getTime(),
        email: this.signUpForm.controls.email.value,
        gender: this.signUpForm.controls.gender.value,
        hobbies: this.signUpForm.controls.checkArray.value
      });

      this.signInList.push({
        email:this.signUpForm.controls.email.value,
        password:this.signUpForm.controls.password.value
      })
      
      this.router.navigate(['/','auth','signin']);

    }
    console.log(SIGNUP)
    console.log(SIGNUPIN)
    console.log("--")
    console.log(this.signInList);
    console.log(this.signUpList)
//     console.log({
//       username: this.signUpForm.controls.username.value,
// password: this.signUpForm.controls.password.value,
// cpassword: this.signUpForm.controls.cpassword.value,
// birthdate: new Date(this.signUpForm.controls.birthdate.value).getTime(),
// email: this.signUpForm.controls.email.value,
// gender: this.signUpForm.controls.gender.value,
// checkArray: this.signUpForm.controls.checkArray.value
//     });
  }

  onCheckChange(event) {
    const checkArray: FormArray = this.signUpForm.get('checkArray') as FormArray;
    // console.log(checkArray.controls);
    if (event.target.checked) {
      checkArray.push(new FormControl(event.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == event.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
}
