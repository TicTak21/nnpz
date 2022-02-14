import { LyTheme2 } from '@alyle/ui';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChartDataset } from 'chart.js';

const styles = {
  chart: {
    padding: '0.5rem',
  },
};

@Component({
  selector: 'admin-dashboard-top-five-pizzas',
  templateUrl: './dashboard-top-five-pizzas.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardTopFivePizzasComponent {
  classes = this.theme.addStyleSheet(styles);

  constructor(private readonly theme: LyTheme2) {}

  barChartOptions = {
    responsive: true,
  };
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
      backgroundColor: '#1eeab6',
      hoverBackgroundColor: '#9d28b0',
    },
  ];
}
