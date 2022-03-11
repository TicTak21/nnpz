import { LyButtonModule } from '@alyle/ui/button';
import { LyFieldModule } from '@alyle/ui/field';
import { LySliderModule } from '@alyle/ui/slider';
import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ReportPageComponent } from './containers/report-page/report-page.component';
import { ReportRoutingModule } from './report-routing.module';

@NgModule({
  declarations: [ReportPageComponent],
  imports: [
    CommonModule,
    ReportRoutingModule,
    LyButtonModule,
    LySliderModule,
    LyFieldModule,
    ReactiveFormsModule,
    LyTypographyModule,
  ],
})
export class ReportModule {}
