import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalePageComponent } from './containers/sale-page/sale-page.component';

const routes: Routes = [{ path: '', component: SalePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaleRoutingModule {}
