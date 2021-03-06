import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromAuth } from '@nnpz/admin/data-access-auth';
import { fromLayout } from '@nnpz/admin/data-access-layout';
import { DASHBOARD_COMPONENTS_MAP } from '@nnpz/admin/ui-dashboard';
import { ELayoutType } from '@nnpz/admin/util-layout';
import { Observable } from 'rxjs';
import { TLayoutConfig } from '../interfaces';

const {
  AdminUiDashboardDividerComponent,
  AdminUiDashboardEntitiesComponent,
  AdminUiDashboardNotesComponent,
  AdminUiDashboardProfileComponent,
  AdminUiDashboardSalesAmountChartComponent,
  AdminUiDashboardTopFivePizzasComponent,
} = DASHBOARD_COMPONENTS_MAP;

@Component({
  selector: 'admin-feature-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminFeatureDashboardPageComponent {
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
    standard: [
      {
        component: AdminUiDashboardProfileComponent,
        col: '4 12@XSmall@Small 3@Medium',
        inputs: {
          username: this.MOCK_DATA.username,
          img: this.MOCK_DATA.img,
        },
        outputs: {
          handleLogoutChange$: () => this.handleLogout(),
        },
      },
      {
        component: AdminUiDashboardSalesAmountChartComponent,
        col: '8 12@XSmall@Small 9@Medium',
        inputs: {},
        outputs: {},
      },
      {
        component: AdminUiDashboardDividerComponent,
        col: '12',
        inputs: {
          activeOrders: this.MOCK_DATA.activeOrders,
          activeUsers: this.MOCK_DATA.activeUsers,
        },
        outputs: {},
      },
      {
        component: AdminUiDashboardTopFivePizzasComponent,
        col: '6 12@XSmall@Small 7@Medium',
        inputs: {},
        outputs: {},
      },
      {
        component: AdminUiDashboardNotesComponent,
        col: '6 12@XSmall@Small 5@Medium',
        inputs: {},
        outputs: {},
      },
      {
        component: AdminUiDashboardEntitiesComponent,
        col: '12',
        inputs: {
          entities: this.MOCK_DATA.entities,
        },
        outputs: {},
      },
    ],
    stats: [
      {
        component: AdminUiDashboardSalesAmountChartComponent,
        col: '6 12@XSmall@Small 6@Medium',
        inputs: {},
        outputs: {},
      },
      {
        component: AdminUiDashboardTopFivePizzasComponent,
        col: '6 12@XSmall@Small 6@Medium',
        inputs: {},
        outputs: {},
      },
      {
        component: AdminUiDashboardDividerComponent,
        col: '12',
        inputs: {
          activeOrders: this.MOCK_DATA.activeOrders,
          activeUsers: this.MOCK_DATA.activeUsers,
        },
        outputs: {},
      },
      {
        component: AdminUiDashboardEntitiesComponent,
        col: '12',
        inputs: {
          entities: this.MOCK_DATA.entities,
        },
        outputs: {},
      },
      {
        component: AdminUiDashboardNotesComponent,
        col: '8 12@XSmall@Small 8@Medium',
        inputs: {},
        outputs: {},
      },
      {
        component: AdminUiDashboardProfileComponent,
        col: '4 12@XSmall@Small 4@Medium',
        inputs: {
          username: this.MOCK_DATA.username,
          img: this.MOCK_DATA.img,
        },
        outputs: {
          handleLogoutChange$: () => this.handleLogout(),
        },
      },
    ],
    management: [
      {
        component: AdminUiDashboardDividerComponent,
        col: '12',
        inputs: {
          activeOrders: this.MOCK_DATA.activeOrders,
          activeUsers: this.MOCK_DATA.activeUsers,
        },
        outputs: {},
      },
      {
        component: AdminUiDashboardNotesComponent,
        col: '12 12@XSmall@Small 12@Medium',
        inputs: {},
        outputs: {},
      },
      {
        component: AdminUiDashboardProfileComponent,
        col: '4 12@XSmall@Small 4@Medium',
        inputs: {
          username: this.MOCK_DATA.username,
          img: this.MOCK_DATA.img,
        },
        outputs: {
          handleLogoutChange$: () => this.handleLogout(),
        },
      },
      {
        component: AdminUiDashboardEntitiesComponent,
        col: '8 12@XSmall@Small 8@Medium',
        inputs: {
          entities: this.MOCK_DATA.entities,
        },
        outputs: {},
      },
      {
        component: AdminUiDashboardSalesAmountChartComponent,
        col: '6 12@XSmall@Small 6@Medium',
        inputs: {},
        outputs: {},
      },
      {
        component: AdminUiDashboardTopFivePizzasComponent,
        col: '6 12@XSmall@Small 6@Medium',
        inputs: {},
        outputs: {},
      },
    ],
  };

  constructor(private readonly store: Store) {
    this.layoutType$ = this.store.select(fromLayout.selectLayoutType);
  }

  handleLogout() {
    this.store.dispatch(fromAuth.logout());
  }
}
