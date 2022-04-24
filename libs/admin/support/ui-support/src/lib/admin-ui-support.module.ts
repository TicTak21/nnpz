import { LyButtonModule } from '@alyle/ui/button';
import { LyFieldModule } from '@alyle/ui/field';
import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminUtilI18nModule } from '@nnpz/admin/util-i18n';
import { scopeLoader } from 'scoped-translations';
import { AdminUiSupportIssueFormComponent } from './support-issue-form/support-issue-form.component';
import { AdminUiSupportTitleComponent } from './support-title/support-title.component';

const COMPONENTS = [
  AdminUiSupportIssueFormComponent,
  AdminUiSupportTitleComponent,
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LyFieldModule,
    LyButtonModule,
    LyTypographyModule,
    AdminUtilI18nModule.forChild(
      'adminUiSupport',
      scopeLoader(
        (lang: string, root: string) => import(`../${root}/${lang}.json`),
      ),
    ),
  ],
  exports: [COMPONENTS],
})
export class AdminUiSupportModule {}
