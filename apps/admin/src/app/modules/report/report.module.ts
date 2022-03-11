import { LyButtonModule } from '@alyle/ui/button';
import { LyFieldModule } from '@alyle/ui/field';
import { LySliderModule } from '@alyle/ui/slider';
import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ReportFormComponent } from './components/report-form/report-form.component';
import { ReportTitleComponent } from './components/report-title/report-title.component';
import { ReportPageComponent } from './containers/report-page/report-page.component';
import { ReportRoutingModule } from './report-routing.module';

@NgModule({
  declarations: [
    ReportPageComponent,
    ReportFormComponent,
    ReportTitleComponent,
  ],
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
