import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SettingsPageComponent } from './containers/settings-page/settings-page.component';
import { SettingsRoutingModule } from './settings-routing.module';

@NgModule({
  declarations: [SettingsPageComponent],
  imports: [CommonModule, SettingsRoutingModule, LyTypographyModule],
})
export class SettingsModule {}
