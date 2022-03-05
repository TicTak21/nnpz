import { LY_THEME, LY_THEME_GLOBAL_VARIABLES } from '@alyle/ui';
import { LyButtonModule } from '@alyle/ui/button';
import { LyIconModule } from '@alyle/ui/icon';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaseThemeModule } from '@nnpz/ui';
import { ThemeSwitchComponent } from './components/theme-switch/theme-switch.component';
import { CustomMinimaDark } from './custom/dark/dark.theme';
import { CustomMinimaLight } from './custom/light/light.theme';
import { CustomGlobalVariables } from './custom/vars/custom-variables.theme';

@NgModule({
  declarations: [ThemeSwitchComponent],
  imports: [CommonModule, BaseThemeModule, LyIconModule, LyButtonModule],
  exports: [ThemeSwitchComponent],
  providers: [
    { provide: LY_THEME, useClass: CustomMinimaLight, multi: true },
    { provide: LY_THEME, useClass: CustomMinimaDark, multi: true },
    { provide: LY_THEME_GLOBAL_VARIABLES, useClass: CustomGlobalVariables },
  ],
})
export class ThemeModule {}
