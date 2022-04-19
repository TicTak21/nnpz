import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IDashboardEntity } from '@nnpz/shared/types';

@Component({
  selector: 'admin-ui-entities-card',
  templateUrl: './entities-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminUiEntitiesCardComponent {
  @Input() entity: IDashboardEntity | null = null;
}
