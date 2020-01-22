import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm:FormGroup;
  
  Data: Array<{name:string,value:string}> = [
    { name: 'reading', value: 'Reading' },
    { name: 'sport', value: 'Sport' },
    { name: 'drinking', value: 'Drinking' },
    { name: 'singing', value: 'Singing' },
  ];

  constructor() { }

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
   
  }

  onFormSubmit(){
    console.log(this.signUpForm.value);
  }

  onCheckChange(event) {
    const checkArray: FormArray = this.signUpForm.get('checkArray') as FormArray;
    console.log(checkArray);
    console.log(checkArray.controls);
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
