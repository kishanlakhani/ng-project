import { Component, OnInit } from '@angular/core';
import { SignUpInService } from './../../services/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isLogin:boolean = true;
  constructor(
    private userService:SignUpInService
  ) { }

  ngOnInit() {
  }
  onFormSubmit(formValue){
    if(this.isLogin){
      console.log('login')
      this.userService.logging(formValue)
    }else{
        this.userService.signup(formValue)
        .subscribe(r=>{
          this.isLogin = !this.isLogin
        })
      }
    }
    

}
