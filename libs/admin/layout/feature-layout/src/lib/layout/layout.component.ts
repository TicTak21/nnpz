import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'admin-feature-layout',
  templateUrl: './layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminFeatureLayoutComponent {}
