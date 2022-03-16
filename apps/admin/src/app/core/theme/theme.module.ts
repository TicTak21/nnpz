import { LY_THEME, LY_THEME_GLOBAL_VARIABLES } from '@alyle/ui';
import { LyButtonModule } from '@alyle/ui/button';
import { LyIconModule } from '@alyle/ui/icon';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaseThemeModule } from '@nnpz/ui';
import { CustomMinimaDark } from './config/dark/dark.theme';
import { CustomMinimaLight } from './config/light/light.theme';
import { CustomGlobalVariables } from './config/vars/custom-variables.theme';
import { ThemeSwitchComponent } from './containers/theme-switch/theme-switch.component';
import { IsDarkModePipe } from './pipes/is-dark-mode.pipe';

@NgModule({
  declarations: [ThemeSwitchComponent, IsDarkModePipe],
  imports: [CommonModule, BaseThemeModule, LyIconModule, LyButtonModule],
  exports: [ThemeSwitchComponent],
  providers: [
    { provide: LY_THEME, useClass: CustomMinimaLight, multi: true },
    { provide: LY_THEME, useClass: CustomMinimaDark, multi: true },
    { provide: LY_THEME_GLOBAL_VARIABLES, useClass: CustomGlobalVariables },
  ],
})
export class ThemeModule {}
