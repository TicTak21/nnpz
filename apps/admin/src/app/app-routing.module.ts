import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
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
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        m => m.DashboardModule,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'me',
    loadChildren: () => import('./modules/me/me.module').then(m => m.MeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'support',
    loadChildren: () =>
      import('./modules/support/support.module').then(m => m.SupportModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'report',
    loadChildren: () =>
      import('./modules/report/report.module').then(m => m.ReportModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'entities',
    loadChildren: () =>
      import('./modules/entities/entities.module').then(m => m.EntitiesModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'sales',
    loadChildren: () =>
      import('./modules/sales/sales.module').then(m => m.SalesModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./modules/orders/orders.module').then(m => m.OrdersModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'locations',
    loadChildren: () =>
      import('./modules/locations/locations.module').then(
        m => m.LocationsModule,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./modules/users/users.module').then(m => m.UsersModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'pizzas',
    loadChildren: () =>
      import('./modules/pizzas/pizzas.module').then(m => m.PizzasModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'toppings',
    loadChildren: () =>
      import('./modules/toppings/toppings.module').then(m => m.ToppingsModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'notifications',
    loadChildren: () =>
      import('./modules/notifications/notifications.module').then(
        m => m.NotificationsModule,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./modules/settings/settings.module').then(m => m.SettingsModule),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    loadChildren: () =>
      import('@nnpz/admin/feature-not-found').then(
        m => m.AdminFeatureNotFoundModule,
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
