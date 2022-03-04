import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'admin-dashboard-active-users',
  templateUrl: './dashboard-active-users.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardActiveUsersComponent {
  @Input() activeUsers: number = 0;
}
