import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'admin-users-page',
  templateUrl: './users-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersPageComponent {}
