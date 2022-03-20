import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'admin-notification-page',
  templateUrl: './notification-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationPageComponent {}
