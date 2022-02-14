import { LyCommonModule } from '@alyle/ui';
import { LyGridModule } from '@alyle/ui/grid';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { DashboardTopFivePizzasComponent } from './components/dashboard-top-five-pizzas/dashboard-top-five-pizzas.component';
import { DashboardPageComponent } from './containers/dashboard-page/dashboard-page.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardActiveUsersComponent } from './components/dashboard-active-users/dashboard-active-users.component';

@NgModule({
  declarations: [DashboardPageComponent, DashboardTopFivePizzasComponent, DashboardActiveUsersComponent],
  imports: [
    CommonModule,
    LyCommonModule,
    DashboardRoutingModule,
    NgChartsModule,
    LyGridModule,
  ],
})
export class DashboardModule {}
