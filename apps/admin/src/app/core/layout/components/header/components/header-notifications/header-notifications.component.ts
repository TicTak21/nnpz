import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'admin-header-notifications',
  templateUrl: './header-notifications.component.html',

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderNotificationsComponent {
  @Input() notifications: { title: string; id: number }[] = [];

  get countNotifications(): number {
    return this.notifications.length;
  }
}
