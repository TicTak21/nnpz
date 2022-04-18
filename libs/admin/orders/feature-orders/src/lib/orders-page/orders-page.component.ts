import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'admin-feature-orders-page',
  templateUrl: './orders-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminFeatureOrdersPageComponent {}
