import { Component, OnInit } from '@angular/core';
import { SignUpInService } from 'src/app/services/user.service';

@Component({
  selector: 'app-product-main',
  templateUrl: './product-main.component.html',
  styleUrls: ['./product-main.component.scss']
})
export class ProductMainComponent implements OnInit {    
  
  title = 'input-output-assignment';
  constructor(
    private userService:SignUpInService
  ){}
  ngOnInit() {
  }
  onLogOut(){
    this.userService.logOut();
    // function preventBack() {  }
    setTimeout(()=>window.history.forward(), 0);
    // window.onunload = function () { null };
  }

}
