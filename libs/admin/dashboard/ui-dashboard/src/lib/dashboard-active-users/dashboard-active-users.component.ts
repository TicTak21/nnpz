import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'admin-ui-dashboard-active-users',
  templateUrl: './dashboard-active-users.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminUiDashboardActiveUsersComponent {
  @Input() activeUsers: number = 0;
}
