import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'admin-header-title',
  templateUrl: './header-title.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderTitleComponent {}
