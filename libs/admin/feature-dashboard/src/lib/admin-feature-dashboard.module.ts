import { LyGridModule } from '@alyle/ui/grid';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminUiDashboardModule } from '@nnpz/admin/ui-dashboard';
import { DynamicIoModule, DynamicModule } from 'ng-dynamic-component';
import { AdminFeatureDashboardPageComponent } from './dashboard-page/dashboard-page.component';

@NgModule({
  declarations: [AdminFeatureDashboardPageComponent],
  imports: [
    CommonModule,
    AdminUiDashboardModule,
    DynamicIoModule,
    DynamicModule,
    LyGridModule,
    RouterModule.forChild([
      { path: '', component: AdminFeatureDashboardPageComponent },
    ]),
  ],
})
export class AdminFeatureDashboardModule {}
