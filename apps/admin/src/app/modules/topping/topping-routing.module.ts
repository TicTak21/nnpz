import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToppingPageComponent } from './containers/topping-page/topping-page.component';

const routes: Routes = [{ path: '', component: ToppingPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToppingRoutingModule {}
