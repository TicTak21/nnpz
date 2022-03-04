import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChartDataset } from 'chart.js';

@Component({
  selector: 'admin-dashboard-top-five-pizzas',
  templateUrl: './dashboard-top-five-pizzas.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardTopFivePizzasComponent {
  barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: 'rgb(143,155,179)',
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'rgb(143,155,179)',
        },
        grid: {
          color: 'rgb(143,155,179,0.25)',
        },
      },
      y: {
        ticks: {
          color: 'rgb(143,155,179)',
        },
        grid: {
          color: 'rgb(143,155,179,0.25)',
        },
      },
    },
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
      backgroundColor: 'rgb(50,99,247,0.1)',
      hoverBackgroundColor: 'rgb(50,99,247,0.5)',
      hoverBorderColor: 'rgb(0,214,143)',
      borderColor: 'rgb(50,99,247)',
      borderWidth: 3,
    },
  ];
}
