import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'admin-ui-header-title',
  templateUrl: './header-title.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminUiHeaderTitleComponent {}
