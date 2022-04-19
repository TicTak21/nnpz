import { LY_THEME, LY_THEME_GLOBAL_VARIABLES } from '@alyle/ui';
import { LyButtonModule } from '@alyle/ui/button';
import { LyIconModule } from '@alyle/ui/icon';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminDataAccessThemeModule } from '@nnpz/admin/data-access-theme';
import {
  CustomGlobalVariables,
  CustomMinimaDark,
  CustomMinimaLight,
} from '@nnpz/admin/util-theme';
import { BaseThemeModule } from '@nnpz/shared/ui';
import { SharedUtilModule } from '@nnpz/shared/util';
import { AdminUiThemeSwitchComponent } from './theme-switch/theme-switch.component';

const COMPONENTS = [AdminUiThemeSwitchComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    BaseThemeModule,
    AdminDataAccessThemeModule,
    LyButtonModule,
    LyIconModule,
    SharedUtilModule,
  ],
  exports: [COMPONENTS],
  providers: [
    { provide: LY_THEME, useClass: CustomMinimaLight, multi: true },
    { provide: LY_THEME, useClass: CustomMinimaDark, multi: true },
    { provide: LY_THEME_GLOBAL_VARIABLES, useClass: CustomGlobalVariables },
  ],
})
export class AdminFeatureThemeModule {}
