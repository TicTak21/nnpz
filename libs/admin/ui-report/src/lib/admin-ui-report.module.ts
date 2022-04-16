import { LyButtonModule } from '@alyle/ui/button';
import { LyFieldModule } from '@alyle/ui/field';
import { LySliderModule } from '@alyle/ui/slider';
import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminUiReportFormComponent } from './report-form/report-form.component';
import { AdminUiReportTitleComponent } from './report-title/report-title.component';

const COMPONENTS = [AdminUiReportFormComponent, AdminUiReportTitleComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LyTypographyModule,
    LyFieldModule,
    LySliderModule,
    LyButtonModule,
  ],
  exports: [COMPONENTS],
})
export class AdminUiReportModule {}
