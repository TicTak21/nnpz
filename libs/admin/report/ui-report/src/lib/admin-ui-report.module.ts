import { LyButtonModule } from '@alyle/ui/button';
import { LyFieldModule } from '@alyle/ui/field';
import { LySliderModule } from '@alyle/ui/slider';
import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminUtilI18nModule } from '@nnpz/admin/util-i18n';
import { scopeLoader } from 'scoped-translations';
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
    AdminUtilI18nModule.forChild(
      'adminUiReport',
      scopeLoader(
        (lang: string, root: string) => import(`../${root}/${lang}.json`),
      ),
    ),
  ],
  exports: [COMPONENTS],
})
export class AdminUiReportModule {}
