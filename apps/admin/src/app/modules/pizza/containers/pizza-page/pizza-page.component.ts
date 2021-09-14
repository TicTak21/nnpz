import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'admin-pizza-page',
  templateUrl: './pizza-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PizzaPageComponent {}
