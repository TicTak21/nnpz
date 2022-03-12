import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntityPageComponent } from './containers/entity-page/entity-page.component';

const routes: Routes = [{ path: '', component: EntityPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntityRoutingModule {}
