import { LyButtonModule } from '@alyle/ui/button';
import { LyFieldModule } from '@alyle/ui/field';
import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { AdminUtilI18nModule } from '@nnpz/admin/util-i18n';
import { NnpzAvatarModule } from '@nnpz/shared/ui';
import { scopeLoader } from 'scoped-translations';
import { AdminUiMeEditFormComponent } from './me-edit-form/me-edit-form.component';
import { AdminUiMeEditTabTitleComponent } from './me-edit-tab-title/me-edit-tab-title.component';
import { AdminUiMeProfileComponent } from './me-profile/me-profile.component';
import { AdminUiMeYouTabTitleComponent } from './me-you-tab-title/me-you-tab-title.component';

const COMPONENTS = [
  AdminUiMeEditFormComponent,
  AdminUiMeProfileComponent,
  AdminUiMeEditTabTitleComponent,
  AdminUiMeYouTabTitleComponent,
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    NnpzAvatarModule,
    ReactiveFormsModule,
    LyFieldModule,
    LyTypographyModule,
    LyButtonModule,
    AdminUtilI18nModule.forChild(
      'adminUiMe',
      scopeLoader(
        (lang: string, root: string) => import(`../${root}/${lang}.json`),
      ),
    ),
  ],
  exports: [COMPONENTS, TranslocoModule],
})
export class AdminUiMeModule {}
