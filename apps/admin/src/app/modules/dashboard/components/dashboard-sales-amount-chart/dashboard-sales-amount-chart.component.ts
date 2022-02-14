import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChartDataset } from 'chart.js';

@Component({
  selector: 'admin-dashboard-sales-amount-chart',
  templateUrl: './dashboard-sales-amount-chart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardSalesAmountChartComponent {
  lineChartData: ChartDataset[] = [
    {
      data: [85, 72, 78, 75, 77, 75],
      label: 'Sales amount',
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
