import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'admin-ui-header-notifications',
  templateUrl: './header-notifications.component.html',

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminUiHeaderNotificationsComponent {
  @Input() notifications: { title: string; id: number }[] = [];

  get countNotifications(): number {
    return this.notifications.length;
  }
}
