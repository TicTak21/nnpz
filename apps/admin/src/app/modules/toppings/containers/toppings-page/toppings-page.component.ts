import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'admin-toppings-page',
  templateUrl: './toppings-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToppingsPageComponent {}
