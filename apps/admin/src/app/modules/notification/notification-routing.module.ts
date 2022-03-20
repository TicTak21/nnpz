import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationPageComponent } from './containers/notification-page/notification-page.component';

const routes: Routes = [{ path: '', component: NotificationPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationRoutingModule {}
