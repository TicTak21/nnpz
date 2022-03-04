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
      backgroundColor: 'rgb(19,220,148,0.1)',
      borderColor: 'rgb(19,220,148)',
      fill: true,
      pointBackgroundColor: 'rgb(255,255,255)',
      pointBorderColor: 'rgb(50,99,247)',
      pointBorderWidth: 4,
      pointHoverBorderColor: 'rgb(50,99,247)',
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
  lineChartOptions = {
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
}
