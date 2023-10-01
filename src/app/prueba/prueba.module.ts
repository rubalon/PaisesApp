import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PruebaComponentComponent } from './prueba-component/prueba-component.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PruebaComponentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    PruebaComponentComponent
  ]
})
export class PruebaModule { }
