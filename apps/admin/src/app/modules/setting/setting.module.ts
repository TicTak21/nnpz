import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SettingPageComponent } from './containers/setting-page/setting-page.component';
import { SettingRoutingModule } from './setting-routing.module';

@NgModule({
  declarations: [SettingPageComponent],
  imports: [CommonModule, SettingRoutingModule, LyTypographyModule],
})
export class SettingModule {}
