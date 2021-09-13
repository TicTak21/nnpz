import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'admin-pizza',
  templateUrl: './pizza.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PizzaComponent {}
