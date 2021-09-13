import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaPageComponent } from './containers/pizza-page/pizza-page.component';

const routes: Routes = [{ path: '', component: PizzaPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PizzaRoutingModule {}
