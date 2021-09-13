import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'admin-topping',
  templateUrl: './topping.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToppingComponent {}
