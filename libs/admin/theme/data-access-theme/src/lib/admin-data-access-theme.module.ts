import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromTheme from './+store';

@NgModule({
  imports: [
    StoreModule.forFeature(fromTheme.themeFeatureKey, fromTheme.reducer),
    EffectsModule.forFeature([fromTheme.ThemeEffects]),
  ],
})
export class AdminDataAccessThemeModule {}
