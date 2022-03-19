import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntityNewPageComponent } from './containers/entity-new-page/entity-new-page.component';
import { EntityPageComponent } from './containers/entity-page/entity-page.component';

const routes: Routes = [
  { path: '', component: EntityPageComponent },
  { path: 'new', component: EntityNewPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntityRoutingModule {}
