import { LY_THEME, LY_THEME_GLOBAL_VARIABLES } from '@alyle/ui';
import { NgModule } from '@angular/core';
import { AdminDataAccessThemeModule } from '@nnpz/admin/data-access-theme';
import {
  CustomGlobalVariables,
  CustomMinimaDark,
  CustomMinimaLight,
} from '@nnpz/admin/util-theme';
import { BaseThemeModule } from '@nnpz/shared/ui';
import { SharedUtilModule } from '@nnpz/shared/util';

@NgModule({
  imports: [BaseThemeModule, AdminDataAccessThemeModule, SharedUtilModule],
  providers: [
    { provide: LY_THEME, useClass: CustomMinimaLight, multi: true },
    { provide: LY_THEME, useClass: CustomMinimaDark, multi: true },
    { provide: LY_THEME_GLOBAL_VARIABLES, useClass: CustomGlobalVariables },
  ],
})
export class AdminFeatureThemeModule {}
