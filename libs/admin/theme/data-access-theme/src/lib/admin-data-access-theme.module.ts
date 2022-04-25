import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ThemeEffects, themeFeature } from './+store';

@NgModule({
  imports: [
    StoreModule.forFeature(themeFeature),
    EffectsModule.forFeature([ThemeEffects]),
  ],
})
export class AdminDataAccessThemeModule {}
