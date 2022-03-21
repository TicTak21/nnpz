import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesPageComponent } from './containers/sales-page/sales-page.component';

const routes: Routes = [{ path: '', component: SalesPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesRoutingModule {}
