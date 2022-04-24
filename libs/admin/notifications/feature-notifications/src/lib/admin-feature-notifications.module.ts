import { LyCommonModule } from '@alyle/ui';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminUiNotificationsModule } from '@nnpz/admin/ui-notifications';
import { AdminFeatureNotificationsPageComponent } from './notifications-page/notifications-page.component';

@NgModule({
  declarations: [AdminFeatureNotificationsPageComponent],
  imports: [
    CommonModule,
    LyCommonModule,
    AdminUiNotificationsModule,
    RouterModule.forChild([
      { path: '', component: AdminFeatureNotificationsPageComponent },
    ]),
  ],
})
export class AdminFeatureNotificationsModule {}
