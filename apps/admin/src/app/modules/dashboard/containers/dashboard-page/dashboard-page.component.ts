import { ChangeDetectionStrategy, Component, NgIterable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ELayoutType } from '@nnpz/admin/app/core/layout/enums';
import * as fromLayout from '@nnpz/admin/app/core/layout/store';
import { Observable } from 'rxjs';
import { DashboardDividerComponent } from '../../components/dashboard-divider/dashboard-divider.component';
import { DashboardEntitiesComponent } from '../../components/dashboard-entities/dashboard-entities.component';
import { DashboardProfileComponent } from '../../components/dashboard-profile/dashboard-profile.component';
import { DashboardSalesAmountChartComponent } from '../../components/dashboard-sales-amount-chart/dashboard-sales-amount-chart.component';
import { DashboardTabsComponent } from '../../components/dashboard-tabs/dashboard-tabs.component';
import { DashboardTopFivePizzasComponent } from '../../components/dashboard-top-five-pizzas/dashboard-top-five-pizzas.component';

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

  grid = [
    {
      component: DashboardProfileComponent,
      col: '4 12@XSmall@Small 3@Medium',
      inputs: {
        username: this.MOCK_DATA.username,
        img: this.MOCK_DATA.img,
      },
    },
    {
      component: DashboardSalesAmountChartComponent,
      col: '8 12@XSmall@Small 9@Medium',
      inputs: {},
    },
    {
      component: DashboardDividerComponent,
      col: '12',
      inputs: {
        activeOrders: this.MOCK_DATA.activeOrders,
        activeUsers: this.MOCK_DATA.activeUsers,
      },
    },
    {
      component: DashboardTopFivePizzasComponent,
      col: '6 12@XSmall@Small 7@Medium',
      inputs: {},
    },
    {
      component: DashboardTabsComponent,
      col: '6 12@XSmall@Small 5@Medium',
      inputs: {},
    },
    {
      component: DashboardEntitiesComponent,
      col: '12',
      inputs: {
        entities: this.MOCK_DATA.entities,
      },
    },
  ];

  grid2 = [
    {
      component: DashboardDividerComponent,
      col: '12',
      inputs: {
        activeOrders: this.MOCK_DATA.activeOrders,
        activeUsers: this.MOCK_DATA.activeUsers,
      },
    },
    {
      component: DashboardSalesAmountChartComponent,
      col: '6 12@XSmall@Small 6@Medium',
      inputs: {},
    },
    {
      component: DashboardTopFivePizzasComponent,
      col: '6 12@XSmall@Small 6@Medium',
      inputs: {},
    },
    {
      component: DashboardEntitiesComponent,
      col: '12',
      inputs: {
        entities: this.MOCK_DATA.entities,
      },
    },
    {
      component: DashboardTabsComponent,
      col: '8 12@XSmall@Small 8@Medium',
      inputs: {},
    },
    {
      component: DashboardProfileComponent,
      col: '4 12@XSmall@Small 4@Medium',
      inputs: {
        username: this.MOCK_DATA.username,
        img: this.MOCK_DATA.img,
      },
    },
  ];

  grid3 = [
    {
      component: DashboardDividerComponent,
      col: '12',
      inputs: {
        activeOrders: this.MOCK_DATA.activeOrders,
        activeUsers: this.MOCK_DATA.activeUsers,
      },
    },
    {
      component: DashboardTabsComponent,
      col: '12 12@XSmall@Small 12@Medium',
      inputs: {},
    },
    {
      component: DashboardProfileComponent,
      col: '4 12@XSmall@Small 4@Medium',
      inputs: {
        username: this.MOCK_DATA.username,
        img: this.MOCK_DATA.img,
      },
    },
    {
      component: DashboardEntitiesComponent,
      col: '8 12@XSmall@Small 8@Medium',
      inputs: {
        entities: this.MOCK_DATA.entities,
      },
    },
    {
      component: DashboardSalesAmountChartComponent,
      col: '6 12@XSmall@Small 6@Medium',
      inputs: {},
    },
    {
      component: DashboardTopFivePizzasComponent,
      col: '6 12@XSmall@Small 6@Medium',
      inputs: {},
    },
  ];

  layouts: { [key in ELayoutType]: unknown } = {
    standart: this.grid,
    stats: this.grid2,
    management: this.grid3,
  };

  layoutType$: Observable<ELayoutType> = new Observable<ELayoutType>();

  constructor(private readonly store: Store) {
    this.layoutType$ = this.store.select(fromLayout.selectLayoutType);
  }

  // TODO: remove function call from template
  getLayout(currentLayout: ELayoutType) {
    return this.layouts[currentLayout] as NgIterable<any>;
  }
}
