import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ChartBlue,
  chartConfig,
  ChartGreen,
  ChartWhite,
} from '@nnpz/admin/util-theme';
import { ChartDataset } from 'chart.js';

@Component({
  selector: 'admin-ui-dashboard-sales-amount-chart',
  templateUrl: './dashboard-sales-amount-chart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminUiDashboardSalesAmountChartComponent {
  chartConfig = { ...chartConfig };
  lineChartData: ChartDataset[] = [
    {
      data: [85, 72, 78, 75, 77, 75],
      label: 'Sales amount',
      backgroundColor: ChartGreen.alpha(0.1).css(),
      borderColor: ChartGreen.css(),
      fill: true,
      pointBackgroundColor: ChartWhite.css(),
      pointBorderColor: ChartBlue.css(),
      pointBorderWidth: 4,
      pointHoverBorderColor: ChartBlue.css(),
      pointHoverBorderWidth: 6,
      pointHoverRadius: 10,
      pointRadius: 8,
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
}
