import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToppingComponent } from './components/topping/topping.component';
import { ToppingPageComponent } from './containers/topping-page/topping-page.component';
import { ToppingRoutingModule } from './topping-routing.module';

@NgModule({
  declarations: [ToppingComponent, ToppingPageComponent],
  imports: [CommonModule, ToppingRoutingModule],
})
export class ToppingModule {}
