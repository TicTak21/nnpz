import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminFeatureUsersPageComponent } from './users-page/users-page.component';

@NgModule({
  declarations: [AdminFeatureUsersPageComponent],
  imports: [
    CommonModule,
    LyTypographyModule,
    RouterModule.forChild([
      { path: '', component: AdminFeatureUsersPageComponent },
    ]),
  ],
})
export class AdminFeatureUsersModule {}
