import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'admin-user',
  templateUrl: './user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {}
