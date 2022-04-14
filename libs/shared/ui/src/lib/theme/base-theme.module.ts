import {
  LyHammerGestureConfig,
  LyTheme2,
  LY_THEME,
  LY_THEME_NAME,
  StyleRenderer,
} from '@alyle/ui';
import { MinimaDark, MinimaLight } from '@alyle/ui/themes/minima';
import { NgModule } from '@angular/core';
import { HammerModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { EThemes } from '@nnpz/shared/types';

@NgModule({
  imports: [HammerModule],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: LyHammerGestureConfig },
    StyleRenderer,
    LyTheme2,
    { provide: LY_THEME_NAME, useValue: EThemes.dark },
    { provide: LY_THEME, useClass: MinimaLight, multi: true },
    { provide: LY_THEME, useClass: MinimaDark, multi: true },
  ],
})
export class BaseThemeModule {}
