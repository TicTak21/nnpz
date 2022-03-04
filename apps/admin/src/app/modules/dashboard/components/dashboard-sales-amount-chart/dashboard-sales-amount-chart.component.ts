import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChartDataset } from 'chart.js';
import {
  ChartBlue,
  ChartGreen,
  ChartWhite,
} from '../../../../core/theme/custom/charts/chart-colors.theme';
import { chartConfig } from '../../../../core/theme/custom/charts/chart-config.theme';

@Component({
  selector: 'admin-dashboard-sales-amount-chart',
  templateUrl: './dashboard-sales-amount-chart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardSalesAmountChartComponent {
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
