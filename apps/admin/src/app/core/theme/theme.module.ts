import { LY_THEME } from '@alyle/ui';
import { LyButtonModule } from '@alyle/ui/button';
import { LyIconModule } from '@alyle/ui/icon';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaseThemeModule } from '@nnpz/ui';
import { ThemeService } from 'ng2-charts';
import { CustomMinimaDark } from './custom/custom-minima-dark.theme';

@NgModule({
  imports: [CommonModule, BaseThemeModule, LyIconModule, LyButtonModule],
  providers: [
    ThemeService,
    { provide: LY_THEME, useClass: CustomMinimaDark, multi: true },
  ],
})
export class ThemeModule {}
