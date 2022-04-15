import { LyButtonModule } from '@alyle/ui/button';
import { LyCheckboxModule } from '@alyle/ui/checkbox';
import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminUiSettingsDeleteAccountComponent } from './settings-delete-account/settings-delete-account.component';
import { AdminUiSettingsMuteNotificationsComponent } from './settings-mute-notifications/settings-mute-notifications.component';
import { AdminUiSettingsTerminateSessionsComponent } from './settings-terminate-sessions/settings-terminate-sessions.component';

const COMPONENTS = [
  AdminUiSettingsDeleteAccountComponent,
  AdminUiSettingsMuteNotificationsComponent,
  AdminUiSettingsTerminateSessionsComponent,
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, LyButtonModule, LyTypographyModule, LyCheckboxModule],
  exports: [COMPONENTS],
})
export class AdminUiSettingsModule {}
