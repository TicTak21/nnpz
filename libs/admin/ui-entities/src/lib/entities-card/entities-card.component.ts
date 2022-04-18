import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IDashboardEntity } from '@nnpz/shared/util';

@Component({
  selector: 'admin-ui-entities-card',
  templateUrl: './entities-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminUiEntitiesCardComponent {
  @Input() entity: IDashboardEntity | null = null;
}
