import { LyButtonModule } from '@alyle/ui/button';
import { LyCheckboxModule } from '@alyle/ui/checkbox';
import { LyDividerModule } from '@alyle/ui/divider';
import { LyGridModule } from '@alyle/ui/grid';
import { LyListModule } from '@alyle/ui/list';
import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SettingsDeleteAccountComponent } from './components/settings-delete-account/settings-delete-account.component';
import { SettingsMuteNotificationsComponent } from './components/settings-mute-notifications/settings-mute-notifications.component';
import { SettingsTerminateSessionsComponent } from './components/settings-terminate-sessions/settings-terminate-sessions.component';
import { SettingsPageComponent } from './containers/settings-page/settings-page.component';
import { SettingsRoutingModule } from './settings-routing.module';

@NgModule({
  declarations: [
    SettingsPageComponent,
    SettingsTerminateSessionsComponent,
    SettingsDeleteAccountComponent,
    SettingsMuteNotificationsComponent,
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    LyTypographyModule,
    LyGridModule,
    LyButtonModule,
    LyListModule,
    LyDividerModule,
    LyCheckboxModule,
  ],
})
export class SettingsModule {}
