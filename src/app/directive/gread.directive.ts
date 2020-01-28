import { Directive, Input, HostListener, OnChanges, HostBinding, ElementRef, SimpleChange, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appGread]'
})
export class GreadDirective  {
  @Input('appGread') getStock:string;
  @HostBinding('innerHTML') innerValue = '';
  @HostBinding('style.backgroundColor') bgColor='';
  @HostBinding('style.color') color="black"


  constructor(private el:ElementRef) { }
  // ngOnChanges(changes:SimpleChange) :void{ 
    // console.log(changes);

    ngOnChanges(changes: SimpleChanges): void {
      //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
      //Add '${implements OnChanges}' to the class.
      // console.log(changes)

      if(this.getStock == '' || isNaN(Number(this.getStock))){
        this.innerValue=''
      }
      else if(Number(this.getStock) > 0 && Number(this.getStock) <=10){
        this.innerValue = "C"
        this.bgColor = 'red'
      }
      else if(Number(this.getStock) >= 10 && Number(this.getStock) <=20){
        this.innerValue = "B"
        this.bgColor = 'yellow'
  
  
      }else if(Number(this.getStock) >20){
        this.innerValue="A"
        this.bgColor = 'green'
  
      }else{
      }
      this.el.nativeElement.innerHTML = this.innerValue;
    }
    private abc(){
      
    }

    

}
