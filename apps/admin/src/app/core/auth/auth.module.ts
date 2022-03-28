import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  providers: [AuthGuard],
})
export class AuthModule {}
