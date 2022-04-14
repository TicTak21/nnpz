import { LY_THEME, LY_THEME_GLOBAL_VARIABLES } from '@alyle/ui';
import { LyButtonModule } from '@alyle/ui/button';
import { LyIconModule } from '@alyle/ui/icon';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BaseThemeModule } from '@nnpz/shared/ui';
import {
  CustomGlobalVariables,
  CustomMinimaDark,
  CustomMinimaLight,
} from './config';
import { ThemeSwitchComponent } from './containers/theme-switch/theme-switch.component';
import { IsDarkModePipe } from './pipes/is-dark-mode.pipe';
import * as fromTheme from './store';

@NgModule({
  declarations: [ThemeSwitchComponent, IsDarkModePipe],
  imports: [
    CommonModule,
    BaseThemeModule,
    LyIconModule,
    LyButtonModule,
    StoreModule.forFeature(fromTheme.themeFeatureKey, fromTheme.reducer),
    EffectsModule.forFeature([fromTheme.ThemeEffects]),
  ],
  exports: [ThemeSwitchComponent],
  providers: [
    { provide: LY_THEME, useClass: CustomMinimaLight, multi: true },
    { provide: LY_THEME, useClass: CustomMinimaDark, multi: true },
    { provide: LY_THEME_GLOBAL_VARIABLES, useClass: CustomGlobalVariables },
  ],
})
export class ThemeModule {}
