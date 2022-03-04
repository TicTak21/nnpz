import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'admin-dashboard-divider',
  templateUrl: './dashboard-divider.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardDividerComponent {
  @Input() activeUsers: number = 0;
  @Input() activeOrders: number = 0;
}
