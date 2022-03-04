import { ChartGray } from './chart-colors.theme';

export const chartConfig = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        color: ChartGray.css(),
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: ChartGray.css(),
      },
      grid: {
        color: ChartGray.alpha(0.25).css(),
      },
    },
    y: {
      ticks: {
        color: ChartGray.css(),
      },
      grid: {
        color: ChartGray.alpha(0.25).css(),
      },
    },
  },
};
