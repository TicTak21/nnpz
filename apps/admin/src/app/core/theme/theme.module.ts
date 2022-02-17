import { LY_THEME, LY_THEME_GLOBAL_VARIABLES } from '@alyle/ui';
import { LyButtonModule } from '@alyle/ui/button';
import { LyIconModule } from '@alyle/ui/icon';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaseThemeModule } from '@nnpz/ui';
import { ThemeService } from 'ng2-charts';
import { ThemeSwitchComponent } from './components/theme-switch/theme-switch.component';
import { CustomMinimaDark } from './custom/custom-minima-dark.theme';
import { CustomGlobalVariables } from './custom/custom-variables.theme';

@NgModule({
  declarations: [ThemeSwitchComponent],
  imports: [CommonModule, BaseThemeModule, LyIconModule, LyButtonModule],
  exports: [ThemeSwitchComponent],
  providers: [
    ThemeService,
    { provide: LY_THEME, useClass: CustomMinimaDark, multi: true },
    { provide: LY_THEME_GLOBAL_VARIABLES, useClass: CustomGlobalVariables },
  ],
})
export class ThemeModule {}
