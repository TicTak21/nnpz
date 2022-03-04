import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChartDataset } from 'chart.js';
import {
  ChartBlue,
  ChartGreen,
} from '../../../../core/theme/custom/charts/chart-colors.theme';
import { chartConfig } from '../../../../core/theme/custom/charts/chart-config.theme';

@Component({
  selector: 'admin-dashboard-top-five-pizzas',
  templateUrl: './dashboard-top-five-pizzas.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardTopFivePizzasComponent {
  chartConfig = { ...chartConfig };
  barChartLabels: string[] = [
    'Texas',
    'Hawaiian',
    'Pepperoni',
    'Four Cheese',
    'Spicy Bomb',
  ];
  barChartLegend = true;
  barChartData: ChartDataset[] = [
    {
      data: [45, 37, 60, 70, 46],
      label: 'Top 5 Pizzas',
      backgroundColor: ChartBlue.alpha(0.1).css(),
      hoverBackgroundColor: ChartBlue.alpha(0.5).css(),
      hoverBorderColor: ChartGreen.css(),
      borderColor: ChartBlue.css(),
      borderWidth: 3,
    },
  ];
}
