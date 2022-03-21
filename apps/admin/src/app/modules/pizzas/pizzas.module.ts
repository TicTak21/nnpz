import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PizzasPageComponent } from './containers/pizzas-page/pizzas-page.component';
import { PizzasRoutingModule } from './pizzas-routing.module';

@NgModule({
  declarations: [PizzasPageComponent],
  imports: [CommonModule, PizzasRoutingModule, LyTypographyModule],
})
export class PizzasModule {}
