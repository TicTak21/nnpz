import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromI18n from './+store';

@NgModule({
  imports: [
    StoreModule.forFeature(fromI18n.i18nFeatureKey, fromI18n.reducer),
    EffectsModule.forFeature([fromI18n.I18nEffects]),
  ],
})
export class AdminDataAccessI18nModule {}
