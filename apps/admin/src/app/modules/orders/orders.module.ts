import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrdersPageComponent } from './containers/orders-page/orders-page.component';
import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
  declarations: [OrdersPageComponent],
  imports: [CommonModule, OrdersRoutingModule, LyTypographyModule],
})
export class OrdersModule {}
