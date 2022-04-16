import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './+store';

@NgModule({
  imports: [
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducer),
    EffectsModule.forFeature([fromAuth.AuthEffects]),
  ],
})
export class AdminDataAccessAuthModule {}
