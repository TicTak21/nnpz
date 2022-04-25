import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LayoutEffects, layoutFeature } from './+store';

@NgModule({
  imports: [
    StoreModule.forFeature(layoutFeature),
    EffectsModule.forFeature([LayoutEffects]),
  ],
})
export class AdminDataAccessLayoutModule {}
