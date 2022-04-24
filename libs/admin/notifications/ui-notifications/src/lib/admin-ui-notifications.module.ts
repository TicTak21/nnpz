import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminUtilI18nModule } from '@nnpz/admin/util-i18n';
import { scopeLoader } from 'scoped-translations';
import { AdminUiNotificationsPageTitleComponent } from './notifications-page-title/notifications-page-title.component';

const COMPONENTS = [AdminUiNotificationsPageTitleComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    LyTypographyModule,
    AdminUtilI18nModule.forChild(
      'adminUiNotifications',
      scopeLoader(
        (lang: string, root: string) => import(`../${root}/${lang}.json`),
      ),
    ),
  ],
  exports: [COMPONENTS],
})
export class AdminUiNotificationsModule {}
