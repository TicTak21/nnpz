import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IDashboardEntity } from '@nnpz/shared/types';

@Component({
  selector: 'admin-entity-card',
  templateUrl: './entity-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntityCardComponent {
  @Input() entity: IDashboardEntity | null = null;
}
