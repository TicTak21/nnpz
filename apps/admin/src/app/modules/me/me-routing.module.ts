import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MePageComponent } from './containers/me-page/me-page.component';

const routes: Routes = [{ path: '', component: MePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeRoutingModule {}
