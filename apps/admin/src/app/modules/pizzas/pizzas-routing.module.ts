import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzasPageComponent } from './containers/pizzas-page/pizzas-page.component';

const routes: Routes = [{ path: '', component: PizzasPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PizzasRoutingModule {}
