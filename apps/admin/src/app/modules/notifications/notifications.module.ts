import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotificationsPageComponent } from './containers/notifications-page/notifications-page.component';
import { NotificationsRoutingModule } from './notifications-routing.module';

@NgModule({
  declarations: [NotificationsPageComponent],
  imports: [CommonModule, NotificationsRoutingModule, LyTypographyModule],
})
export class NotificationsModule {}
