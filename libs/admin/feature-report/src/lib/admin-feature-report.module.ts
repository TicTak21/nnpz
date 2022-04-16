import { LyCommonModule } from '@alyle/ui';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminUiReportModule } from '@nnpz/admin/ui-report';
import { AdminFeatureReportPageComponent } from './report-page/report-page.component';

@NgModule({
  declarations: [AdminFeatureReportPageComponent],
  imports: [
    CommonModule,
    AdminUiReportModule,
    LyCommonModule,
    RouterModule.forChild([
      { path: '', component: AdminFeatureReportPageComponent },
    ]),
  ],
})
export class AdminFeatureReportModule {}
