import { LyButtonModule } from '@alyle/ui/button';
import { LyFieldModule } from '@alyle/ui/field';
import { LyGridModule } from '@alyle/ui/grid';
import { LyIconModule } from '@alyle/ui/icon';
import { LyTabsModule } from '@alyle/ui/tabs';
import { LyTypographyModule } from '@alyle/ui/typography';
import { TextFieldModule } from '@angular/cdk/text-field';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NnpzAvatarModule } from '@nnpz/shared/ui';
import { NgChartsModule } from 'ng2-charts';
import { AdminUiDashboardActiveOrdersComponent } from './dashboard-active-orders/dashboard-active-orders.component';
import { AdminUiDashboardActiveUsersComponent } from './dashboard-active-users/dashboard-active-users.component';
import { AdminUiDashboardDividerComponent } from './dashboard-divider/dashboard-divider.component';
import { AdminUiDashboardEntitiesComponent } from './dashboard-entities/dashboard-entities.component';
import { AdminUiDashboardEntityNewComponent } from './dashboard-entity-new/dashboard-entity-new.component';
import { AdminUiDashboardEntityComponent } from './dashboard-entity/dashboard-entity.component';
import { AdminUiDashboardNotesComponent } from './dashboard-notes/dashboard-notes.component';
import { AdminUiDashboardProfileComponent } from './dashboard-profile/dashboard-profile.component';
import { AdminUiDashboardSalesAmountChartComponent } from './dashboard-sales-amount-chart/dashboard-sales-amount-chart.component';
import { AdminUiDashboardTopFivePizzasComponent } from './dashboard-top-five-pizzas/dashboard-top-five-pizzas.component';

const COMPONENTS = [
  AdminUiDashboardActiveOrdersComponent,
  AdminUiDashboardActiveUsersComponent,
  AdminUiDashboardDividerComponent,
  AdminUiDashboardEntitiesComponent,
  AdminUiDashboardEntityComponent,
  AdminUiDashboardEntityNewComponent,
  AdminUiDashboardNotesComponent,
  AdminUiDashboardProfileComponent,
  AdminUiDashboardSalesAmountChartComponent,
  AdminUiDashboardTopFivePizzasComponent,
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    LyFieldModule,
    LyButtonModule,
    LyGridModule,
    LyIconModule,
    LyTypographyModule,
    NgChartsModule,
    NnpzAvatarModule,
    LyTabsModule,
    TextFieldModule,
  ],
  exports: [COMPONENTS],
})
export class AdminUiDashboardModule {}
