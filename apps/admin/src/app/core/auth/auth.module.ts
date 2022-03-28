import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { AuthGuard } from './guards/auth.guard';
import { AuthEffects } from './store';

@NgModule({
  imports: [EffectsModule.forFeature([AuthEffects])],
  providers: [AuthGuard],
})
export class AuthModule {}
