import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  navs:{};
  keys:string[]
  selected:number;
  ngOnInit() {
    this.navs={
       'Auth':'/auth',
        'Product' : '/product' 
      } 
      this.keys=Object.keys(this.navs);

    // console.log(this.navs);
    // console.log(this.keys);
  
  }
  onCLick(i){
    this.selected=i;
  }
  onClickA(){
    this.selected=this.keys.length+1;
  }




}
