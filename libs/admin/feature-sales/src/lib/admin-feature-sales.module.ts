import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminFeatureSalesPageComponent } from './sales-page/sales-page.component';

@NgModule({
  declarations: [AdminFeatureSalesPageComponent],
  imports: [
    CommonModule,
    LyTypographyModule,
    RouterModule.forChild([
      { path: '', component: AdminFeatureSalesPageComponent },
    ]),
  ],
})
export class AdminFeatureSalesModule {}
