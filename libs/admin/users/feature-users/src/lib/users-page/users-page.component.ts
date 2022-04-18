import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'admin-feature-users-page',
  templateUrl: './users-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminFeatureUsersPageComponent {}
