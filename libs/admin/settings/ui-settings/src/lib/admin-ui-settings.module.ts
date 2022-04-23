import { LyButtonModule } from '@alyle/ui/button';
import { LyCheckboxModule } from '@alyle/ui/checkbox';
import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminUtilI18nModule } from '@nnpz/admin/util-i18n';
import { scopeLoader } from 'scoped-translations';
import { AdminUiSettingsDangerZoneTitleComponent } from './settings-danger-zone-title/settings-danger-zone-title.component';
import { AdminUiSettingsDeleteAccountComponent } from './settings-delete-account/settings-delete-account.component';
import { AdminUiSettingsMuteNotificationsComponent } from './settings-mute-notifications/settings-mute-notifications.component';
import { AdminUiSettingsNotificationsTitleComponent } from './settings-notifications-title/settings-notifications-title.component';
import { AdminUiSettingsTerminateSessionsComponent } from './settings-terminate-sessions/settings-terminate-sessions.component';
import { AdminUiSettingsTitleComponent } from './settings-title/settings-title.component';

const COMPONENTS = [
  AdminUiSettingsDeleteAccountComponent,
  AdminUiSettingsMuteNotificationsComponent,
  AdminUiSettingsTerminateSessionsComponent,
  AdminUiSettingsTitleComponent,
  AdminUiSettingsNotificationsTitleComponent,
  AdminUiSettingsDangerZoneTitleComponent,
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    LyButtonModule,
    LyTypographyModule,
    LyCheckboxModule,
    AdminUtilI18nModule.forChild(
      'adminUiSettings',
      scopeLoader(
        (lang: string, root: string) => import(`../${root}/${lang}.json`),
      ),
    ),
  ],
  exports: [COMPONENTS],
})
export class AdminUiSettingsModule {}
