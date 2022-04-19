import { LyButtonModule } from '@alyle/ui/button';
import { LyIconModule } from '@alyle/ui/icon';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedUtilModule } from '@nnpz/shared/util';
import { AdminUiThemeSwitchComponent } from './theme-switch/theme-switch.component';

const COMPONENTS = [AdminUiThemeSwitchComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, LyButtonModule, LyIconModule, SharedUtilModule],
  exports: [COMPONENTS],
})
export class AdminUiThemeModule {}
