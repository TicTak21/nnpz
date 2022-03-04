import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'admin-dashboard-tabs',
  templateUrl: './dashboard-tabs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardTabsComponent {}
