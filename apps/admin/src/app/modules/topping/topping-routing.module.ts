import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToppingComponent } from './topping.component';

const routes: Routes = [{ path: '', component: ToppingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToppingRoutingModule { }
