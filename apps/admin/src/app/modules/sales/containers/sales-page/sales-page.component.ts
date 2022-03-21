import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'admin-sales-page',
  templateUrl: './sales-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SalesPageComponent {}
