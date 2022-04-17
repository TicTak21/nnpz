import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'admin-ui-dashboard-divider',
  templateUrl: './dashboard-divider.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminUiDashboardDividerComponent {
  @Input() activeUsers: number = 0;
  @Input() activeOrders: number = 0;
}
