import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'admin-ui-dashboard-active-orders',
  templateUrl: './dashboard-active-orders.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminUiDashboardActiveOrdersComponent {
  @Input() activeOrders: number = 0;
}
