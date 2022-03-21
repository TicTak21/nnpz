import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationsPageComponent } from './containers/locations-page/locations-page.component';

const routes: Routes = [{ path: '', component: LocationsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationsRoutingModule {}
