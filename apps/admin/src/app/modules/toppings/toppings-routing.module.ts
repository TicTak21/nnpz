import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToppingsPageComponent } from './containers/toppings-page/toppings-page.component';

const routes: Routes = [{ path: '', component: ToppingsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToppingsRoutingModule {}
