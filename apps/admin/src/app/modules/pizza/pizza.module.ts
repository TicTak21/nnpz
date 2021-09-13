import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PizzaRoutingModule } from './pizza-routing.module';
import { PizzaComponent } from './pizza.component';


@NgModule({
  declarations: [
    PizzaComponent
  ],
  imports: [
    CommonModule,
    PizzaRoutingModule
  ]
})
export class PizzaModule { }
