import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'nnpz-pizza-card',
  templateUrl: './nnpz-pizza-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NnpzPizzaCardComponent {
  @Input() name: string = '';
  @Input() price: number = 0;
  @Input() description: string = '';
  @Input() image: string =
    'https://www.pizza38.ca/uploads/files/Images/placeholder/placeholder.jpg';
}
