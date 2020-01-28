import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './filter.pipe';
import { MapPipe } from './map.pipe';



@NgModule({
  declarations: [FilterPipe, MapPipe],
  imports: [
    CommonModule
  ],
  exports:[
    FilterPipe,MapPipe
  ]
})
export class PipeModule { }
