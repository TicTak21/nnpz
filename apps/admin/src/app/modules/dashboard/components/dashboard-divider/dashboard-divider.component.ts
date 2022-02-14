import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'admin-dashboard-divider',
  templateUrl: './dashboard-divider.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardDividerComponent {
  @Input() activeUsers = 0;
  @Input() activeOrders = 0;
}
