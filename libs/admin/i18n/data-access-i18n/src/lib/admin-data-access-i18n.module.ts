import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { I18nEffects, i18nFeature } from './+store';

@NgModule({
  imports: [
    StoreModule.forFeature(i18nFeature),
    EffectsModule.forFeature([I18nEffects]),
  ],
})
export class AdminDataAccessI18nModule {}
