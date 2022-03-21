import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UsersPageComponent } from './containers/users-page/users-page.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [UsersPageComponent],
  imports: [CommonModule, UsersRoutingModule, LyTypographyModule],
})
export class UsersModule {}