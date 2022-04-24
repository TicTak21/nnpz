import { LyCommonModule } from '@alyle/ui';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminUiSalesModule } from '@nnpz/admin/ui-sales';
import { AdminFeatureSalesPageComponent } from './sales-page/sales-page.component';

@NgModule({
  declarations: [AdminFeatureSalesPageComponent],
  imports: [
    CommonModule,
    LyCommonModule,
    AdminUiSalesModule,
    RouterModule.forChild([
      { path: '', component: AdminFeatureSalesPageComponent },
    ]),
  ],
})
export class AdminFeatureSalesModule {}
