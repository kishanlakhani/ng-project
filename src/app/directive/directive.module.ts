import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreadDirective } from './gread.directive';



@NgModule({
  declarations: [
    GreadDirective
  ],
  imports: [
    CommonModule
  ]
  ,exports:[
    GreadDirective
  ]
})
export class DirectiveModule { }
