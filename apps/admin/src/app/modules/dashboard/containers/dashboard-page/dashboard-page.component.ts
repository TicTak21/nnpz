import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'admin-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageComponent {
  MOCK_DATA = {
    activeUsers: 12,
    activeOrders: 48,
  };
}
