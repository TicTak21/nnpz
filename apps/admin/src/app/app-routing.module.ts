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
      import('@nnpz/admin/feature-login').then(m => m.AdminFeatureLoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('@nnpz/admin/feature-register').then(
        m => m.AdminFeatureRegisterModule,
      ),
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
    loadChildren: () =>
      import('@nnpz/admin/feature-me').then(m => m.AdminFeatureMeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'support',
    loadChildren: () =>
      import('@nnpz/admin/feature-support').then(
        m => m.AdminFeatureSupportModule,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'report',
    loadChildren: () =>
      import('@nnpz/admin/feature-report').then(
        m => m.AdminFeatureReportModule,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'entities',
    loadChildren: () =>
      import('@nnpz/admin/feature-entities').then(
        m => m.AdminFeatureEntitiesModule,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'sales',
    loadChildren: () =>
      import('@nnpz/admin/feature-sales').then(m => m.AdminFeatureSalesModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('@nnpz/admin/feature-orders').then(
        m => m.AdminFeatureOrdersModule,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'locations',
    loadChildren: () =>
      import('@nnpz/admin/feature-locations').then(
        m => m.AdminFeatureLocationsModule,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'users',
    loadChildren: () =>
      import('@nnpz/admin/feature-users').then(m => m.AdminFeatureUsersModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'pizzas',
    loadChildren: () =>
      import('@nnpz/admin/feature-pizzas').then(
        m => m.AdminFeaturePizzasModule,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'toppings',
    loadChildren: () =>
      import('@nnpz/admin/feature-toppings').then(
        m => m.AdminFeatureToppingsModule,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'notifications',
    loadChildren: () =>
      import('@nnpz/admin/feature-notifications').then(
        m => m.AdminFeatureNotificationsModule,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('@nnpz/admin/feature-settings').then(
        m => m.AdminFeatureSettingsModule,
      ),
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
