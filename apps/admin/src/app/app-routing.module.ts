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
    path: 'pizzas',
    loadChildren: () =>
      import('./modules/pizza/pizza.module').then(m => m.PizzaModule),
  },
  {
    path: 'toppings',
    loadChildren: () =>
      import('./modules/topping/topping.module').then(m => m.ToppingModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./modules/user/user.module').then(m => m.UserModule),
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
    path: 'notifications',
    loadChildren: () =>
      import('./modules/notification/notification.module').then(
        m => m.NotificationModule,
      ),
  },
  {
    path: 'sales',
    loadChildren: () =>
      import('./modules/sale/sale.module').then(m => m.SaleModule),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./modules/setting/setting.module').then(m => m.SettingModule),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./modules/orders/orders.module').then(m => m.OrdersModule),
  },
  { path: 'locations', loadChildren: () => import('./modules/locations/locations.module').then(m => m.LocationsModule) },
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
