import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminFeatureNotificationsPageComponent } from './notifications-page/notifications-page.component';

@NgModule({
  declarations: [AdminFeatureNotificationsPageComponent],
  imports: [
    CommonModule,
    LyTypographyModule,
    RouterModule.forChild([
      { path: '', component: AdminFeatureNotificationsPageComponent },
    ]),
  ],
})
export class AdminFeatureNotificationsModule {}
