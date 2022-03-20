import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotificationPageComponent } from './containers/notification-page/notification-page.component';
import { NotificationRoutingModule } from './notification-routing.module';

@NgModule({
  declarations: [NotificationPageComponent],
  imports: [CommonModule, NotificationRoutingModule, LyTypographyModule],
})
export class NotificationModule {}
