import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserComponent } from './components/user/user.component';
import { UserPageComponent } from './containers/user-page/user-page.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [UserComponent, UserPageComponent],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
