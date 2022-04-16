import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromLayout from './+store';

@NgModule({
  imports: [
    StoreModule.forFeature(fromLayout.layoutFeatureKey, fromLayout.reducer),
    EffectsModule.forFeature([fromLayout.LayoutEffects]),
  ],
})
export class AdminDataAccessLayoutModule {}
