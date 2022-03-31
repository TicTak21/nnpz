import { LyButtonModule } from '@alyle/ui/button';
import { LyGridModule } from '@alyle/ui/grid';
import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SettingsDeleteAccountComponent } from './components/settings-delete-account/settings-delete-account.component';
import { SettingsTerminateSessionsComponent } from './components/settings-terminate-sessions/settings-terminate-sessions.component';
import { SettingsPageComponent } from './containers/settings-page/settings-page.component';
import { SettingsRoutingModule } from './settings-routing.module';

@NgModule({
  declarations: [
    SettingsPageComponent,
    SettingsTerminateSessionsComponent,
    SettingsDeleteAccountComponent,
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    LyTypographyModule,
    LyGridModule,
    LyButtonModule,
  ],
})
export class SettingsModule {}
