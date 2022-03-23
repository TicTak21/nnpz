import { LyCommonModule } from '@alyle/ui';
import { LyButtonModule } from '@alyle/ui/button';
import { LyFieldModule } from '@alyle/ui/field';
import { LyGridModule } from '@alyle/ui/grid';
import { LyIconModule } from '@alyle/ui/icon';
import { LyTabsModule } from '@alyle/ui/tabs';
import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NnpzAvatarModule } from '@nnpz/ui';
import { NgChartsModule } from 'ng2-charts';
import { DashboardActiveOrdersComponent } from './components/dashboard-active-orders/dashboard-active-orders.component';
import { DashboardActiveUsersComponent } from './components/dashboard-active-users/dashboard-active-users.component';
import { DashboardDividerComponent } from './components/dashboard-divider/dashboard-divider.component';
import { DashboardEntityComponent } from './components/dashboard-entity/dashboard-entity.component';
import { DashboardProfileComponent } from './components/dashboard-profile/dashboard-profile.component';
import { DashboardSalesAmountChartComponent } from './components/dashboard-sales-amount-chart/dashboard-sales-amount-chart.component';
import { DashboardTabsComponent } from './components/dashboard-tabs/dashboard-tabs.component';
import { DashboardTopFivePizzasComponent } from './components/dashboard-top-five-pizzas/dashboard-top-five-pizzas.component';
import { DashboardPageComponent } from './containers/dashboard-page/dashboard-page.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardEntityNewComponent } from './components/dashboard-entity-new/dashboard-entity-new.component';
import { DashboardEntitiesComponent } from './components/dashboard-entities/dashboard-entities.component';

@NgModule({
  declarations: [
    DashboardPageComponent,
    DashboardTopFivePizzasComponent,
    DashboardSalesAmountChartComponent,
    DashboardActiveOrdersComponent,
    DashboardActiveUsersComponent,
    DashboardDividerComponent,
    DashboardProfileComponent,
    DashboardTabsComponent,
    DashboardEntityComponent,
    DashboardEntityNewComponent,
    DashboardEntitiesComponent,
  ],
  imports: [
    CommonModule,
    LyCommonModule,
    DashboardRoutingModule,
    NgChartsModule,
    LyGridModule,
    LyTypographyModule,
    LyButtonModule,
    LyIconModule,
    NnpzAvatarModule,
    LyTabsModule,
    LyFieldModule,
  ],
})
export class DashboardModule {}
