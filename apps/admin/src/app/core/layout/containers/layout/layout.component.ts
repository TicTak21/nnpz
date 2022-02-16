import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'admin-layout',
  templateUrl: './layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {}
