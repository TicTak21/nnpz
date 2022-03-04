import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'admin-dashboard-active-orders',
  templateUrl: './dashboard-active-orders.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardActiveOrdersComponent {
  @Input() activeOrders: number = 0;
}
