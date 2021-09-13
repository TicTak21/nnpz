import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToppingRoutingModule } from './topping-routing.module';
import { ToppingComponent } from './topping.component';


@NgModule({
  declarations: [
    ToppingComponent
  ],
  imports: [
    CommonModule,
    ToppingRoutingModule
  ]
})
export class ToppingModule { }
