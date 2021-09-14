import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'admin-user-page',
  templateUrl: './user-page.component.html',

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPageComponent {}
