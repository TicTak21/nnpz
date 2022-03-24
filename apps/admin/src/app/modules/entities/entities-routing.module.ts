import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntitiesPageComponent } from './containers/entities-page/entities-page.component';
import { EntityNewPageComponent } from './containers/entity-new-page/entity-new-page.component';

const routes: Routes = [
  { path: '', component: EntitiesPageComponent },
  { path: 'new', component: EntityNewPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntitiesRoutingModule {}
