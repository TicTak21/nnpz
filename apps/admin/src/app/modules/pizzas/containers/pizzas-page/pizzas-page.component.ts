import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'admin-pizzas-page',
  templateUrl: './pizzas-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PizzasPageComponent {}
