import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'admin-feature-pizzas-page',
  templateUrl: './pizzas-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminFeaturePizzasPageComponent {}
