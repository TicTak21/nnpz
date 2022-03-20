import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'admin-sale-page',
  templateUrl: './sale-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SalePageComponent {}
