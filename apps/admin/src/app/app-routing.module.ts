import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        m => m.DashboardModule,
      ),
  },
  {
    path: 'me',
    loadChildren: () => import('./modules/me/me.module').then(m => m.MeModule),
  },
  {
    path: 'support',
    loadChildren: () =>
      import('./modules/support/support.module').then(m => m.SupportModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./modules/register/register.module').then(m => m.RegisterModule),
  },
  {
    path: 'report',
    loadChildren: () =>
      import('./modules/report/report.module').then(m => m.ReportModule),
  },
  {
    path: 'entities',
    loadChildren: () =>
      import('./modules/entity/entity.module').then(m => m.EntityModule),
  },
  {
    path: 'sales',
    loadChildren: () =>
      import('./modules/sales/sales.module').then(m => m.SalesModule),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./modules/orders/orders.module').then(m => m.OrdersModule),
  },
  {
    path: 'locations',
    loadChildren: () =>
      import('./modules/locations/locations.module').then(
        m => m.LocationsModule,
      ),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./modules/users/users.module').then(m => m.UsersModule),
  },
  {
    path: 'pizzas',
    loadChildren: () =>
      import('./modules/pizzas/pizzas.module').then(m => m.PizzasModule),
  },
  {
    path: 'toppings',
    loadChildren: () =>
      import('./modules/toppings/toppings.module').then(m => m.ToppingsModule),
  },
  {
    path: 'notifications',
    loadChildren: () =>
      import('./modules/notifications/notifications.module').then(
        m => m.NotificationsModule,
      ),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./modules/settings/settings.module').then(m => m.SettingsModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./modules/not-found/not-found.module').then(
        m => m.NotFoundModule,
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
