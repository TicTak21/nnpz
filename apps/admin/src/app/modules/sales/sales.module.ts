import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SalesPageComponent } from './containers/sales-page/sales-page.component';
import { SalesRoutingModule } from './sales-routing.module';

@NgModule({
  declarations: [SalesPageComponent],
  imports: [CommonModule, SalesRoutingModule, LyTypographyModule],
})
export class SalesModule {}
