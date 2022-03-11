import { LyTheme2 } from '@alyle/ui';
import { ChangeDetectionStrategy, Component } from '@angular/core';

const styles = {
  entities: {
    display: 'grid',
    overflowX: 'auto',
    gap: '1rem',
    gridAutoFlow: 'column',
    gridAutoColumns: 'minmax(256px, auto)',
  },
};

@Component({
  selector: 'admin-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageComponent {
  MOCK_DATA = {
    activeUsers: 12,
    activeOrders: 48,
    username: 'Jane Doe',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    entities: [
      {
        name: 'users',
        count: 25,
      },
      {
        name: 'orders',
        count: 201,
      },
      {
        name: 'pizzas',
        count: 13,
      },
      {
        name: 'toppings',
        count: 42,
      },
      {
        name: 'locations',
        count: 21,
      },
    ],
  };
  classes = this.theme.addStyleSheet(styles);

  constructor(private readonly theme: LyTheme2) {}
}
