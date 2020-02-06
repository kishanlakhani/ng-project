import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreadDirective } from './gread.directive';
import { DemoDirective } from './demo.directive';



@NgModule({
  declarations: [
    GreadDirective,
    DemoDirective
  ],
  imports: [
    CommonModule
  ]
  ,exports:[
    GreadDirective,
    DemoDirective
  ]
})
export class DirectiveModule { }
