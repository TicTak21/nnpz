import { LyTheme2 } from '@alyle/ui';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChartDataset } from 'chart.js';

const styles = {
  chart: {
    padding: '0.5rem',
  },
};

@Component({
  selector: 'admin-dashboard-active-users',
  templateUrl: './dashboard-active-users.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardActiveUsersComponent {
  classes = this.theme.addStyleSheet(styles);

  constructor(private readonly theme: LyTheme2) {}

  lineChartData: ChartDataset[] = [
    {
      data: [85, 72, 78, 75, 77, 75],
      label: 'Active users',
      backgroundColor: 'rgb(157, 40, 176, 0.25)',
      borderColor: '#9d28b0',
      fill: true,
      pointBackgroundColor: '#1eeab6',
    },
  ];
  lineChartLabels: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];
  lineChartOptions = {
    responsive: true,
  };
}
