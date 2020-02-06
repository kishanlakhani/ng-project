import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDemo]',

})
export class DemoDirective {
  @HostBinding("style.border") border  = '';
  constructor() { }
    @HostListener('load') abc(){
      console.log('demo load ');
    
// 
    }
    
} 
