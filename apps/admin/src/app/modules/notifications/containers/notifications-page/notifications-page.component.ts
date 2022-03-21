import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'admin-notifications-page',
  templateUrl: './notifications-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationsPageComponent {}
