import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SalePageComponent } from './containers/sale-page/sale-page.component';
import { SaleRoutingModule } from './sale-routing.module';

@NgModule({
  declarations: [SalePageComponent],
  imports: [CommonModule, SaleRoutingModule, LyTypographyModule],
})
export class SaleModule {}
