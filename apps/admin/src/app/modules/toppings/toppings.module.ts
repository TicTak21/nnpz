import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToppingsRoutingModule } from './toppings-routing.module';
import { ToppingsPageComponent } from './containers/toppings-page/toppings-page.component';

@NgModule({
  declarations: [ToppingsPageComponent],
  imports: [CommonModule, ToppingsRoutingModule, LyTypographyModule],
})
export class ToppingsModule {}
