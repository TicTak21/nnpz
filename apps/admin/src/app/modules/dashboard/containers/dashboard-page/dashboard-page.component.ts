import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromLayout } from '@nnpz/admin/data-access-layout';
import { ELayoutType } from '@nnpz/admin/util-layout';
import { Observable } from 'rxjs';
import { DashboardDividerComponent } from '../../components/dashboard-divider/dashboard-divider.component';
import { DashboardEntitiesComponent } from '../../components/dashboard-entities/dashboard-entities.component';
import { DashboardNotesComponent } from '../../components/dashboard-notes/dashboard-notes.component';
import { DashboardProfileComponent } from '../../components/dashboard-profile/dashboard-profile.component';
import { DashboardSalesAmountChartComponent } from '../../components/dashboard-sales-amount-chart/dashboard-sales-amount-chart.component';
import { DashboardTopFivePizzasComponent } from '../../components/dashboard-top-five-pizzas/dashboard-top-five-pizzas.component';
import { TLayoutConfig } from '../../interfaces';

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

  layoutType$: Observable<ELayoutType> = new Observable<ELayoutType>();

  layouts: TLayoutConfig = {
    standart: [
      {
        component: DashboardProfileComponent,
        col: '4 12@XSmall@Small 3@Medium',
        inputs: {
          username: this.MOCK_DATA.username,
          img: this.MOCK_DATA.img,
        },
        outputs: {},
      },
      {
        component: DashboardSalesAmountChartComponent,
        col: '8 12@XSmall@Small 9@Medium',
        inputs: {},
        outputs: {},
      },
      {
        component: DashboardDividerComponent,
        col: '12',
        inputs: {
          activeOrders: this.MOCK_DATA.activeOrders,
          activeUsers: this.MOCK_DATA.activeUsers,
        },
        outputs: {},
      },
      {
        component: DashboardTopFivePizzasComponent,
        col: '6 12@XSmall@Small 7@Medium',
        inputs: {},
        outputs: {},
      },
      {
        component: DashboardNotesComponent,
        col: '6 12@XSmall@Small 5@Medium',
        inputs: {},
        outputs: {},
      },
      {
        component: DashboardEntitiesComponent,
        col: '12',
        inputs: {
          entities: this.MOCK_DATA.entities,
        },
        outputs: {},
      },
    ],
    stats: [
      {
        component: DashboardSalesAmountChartComponent,
        col: '6 12@XSmall@Small 6@Medium',
        inputs: {},
        outputs: {},
      },
      {
        component: DashboardTopFivePizzasComponent,
        col: '6 12@XSmall@Small 6@Medium',
        inputs: {},
        outputs: {},
      },
      {
        component: DashboardDividerComponent,
        col: '12',
        inputs: {
          activeOrders: this.MOCK_DATA.activeOrders,
          activeUsers: this.MOCK_DATA.activeUsers,
        },
        outputs: {},
      },
      {
        component: DashboardEntitiesComponent,
        col: '12',
        inputs: {
          entities: this.MOCK_DATA.entities,
        },
        outputs: {},
      },
      {
        component: DashboardNotesComponent,
        col: '8 12@XSmall@Small 8@Medium',
        inputs: {},
        outputs: {},
      },
      {
        component: DashboardProfileComponent,
        col: '4 12@XSmall@Small 4@Medium',
        inputs: {
          username: this.MOCK_DATA.username,
          img: this.MOCK_DATA.img,
        },
        outputs: {},
      },
    ],
    management: [
      {
        component: DashboardDividerComponent,
        col: '12',
        inputs: {
          activeOrders: this.MOCK_DATA.activeOrders,
          activeUsers: this.MOCK_DATA.activeUsers,
        },
        outputs: {},
      },
      {
        component: DashboardNotesComponent,
        col: '12 12@XSmall@Small 12@Medium',
        inputs: {},
        outputs: {},
      },
      {
        component: DashboardProfileComponent,
        col: '4 12@XSmall@Small 4@Medium',
        inputs: {
          username: this.MOCK_DATA.username,
          img: this.MOCK_DATA.img,
        },
        outputs: {},
      },
      {
        component: DashboardEntitiesComponent,
        col: '8 12@XSmall@Small 8@Medium',
        inputs: {
          entities: this.MOCK_DATA.entities,
        },
        outputs: {},
      },
      {
        component: DashboardSalesAmountChartComponent,
        col: '6 12@XSmall@Small 6@Medium',
        inputs: {},
        outputs: {},
      },
      {
        component: DashboardTopFivePizzasComponent,
        col: '6 12@XSmall@Small 6@Medium',
        inputs: {},
        outputs: {},
      },
    ],
  };

  constructor(private readonly store: Store) {
    this.layoutType$ = this.store.select(fromLayout.selectLayoutType);
  }
}
