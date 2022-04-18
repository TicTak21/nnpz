import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminFeatureOrdersPageComponent } from './orders-page/orders-page.component';

@NgModule({
  declarations: [AdminFeatureOrdersPageComponent],
  imports: [
    CommonModule,
    LyTypographyModule,
    RouterModule.forChild([
      { path: '', component: AdminFeatureOrdersPageComponent },
    ]),
  ],
})
export class AdminFeatureOrdersModule {}
