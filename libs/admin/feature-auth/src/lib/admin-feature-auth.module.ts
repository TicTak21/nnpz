import { NgModule } from '@angular/core';
import { AdminDataAccessAuthModule } from '@nnpz/admin/data-access-auth';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  imports: [AdminDataAccessAuthModule],
  providers: [AuthGuard],
})
export class AdminFeatureAuthModule {}
