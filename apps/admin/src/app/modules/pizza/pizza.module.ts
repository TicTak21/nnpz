import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PizzaComponent } from './components/pizza/pizza.component';
import { PizzaPageComponent } from './containers/pizza-page/pizza-page.component';
import { PizzaRoutingModule } from './pizza-routing.module';

@NgModule({
  declarations: [PizzaComponent, PizzaPageComponent],
  imports: [CommonModule, PizzaRoutingModule],
})
export class PizzaModule {}
