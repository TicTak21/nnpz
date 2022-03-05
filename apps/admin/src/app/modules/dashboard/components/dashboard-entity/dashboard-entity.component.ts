import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IDashboardEntity } from '@nnpz/types';

@Component({
  selector: 'admin-dashboard-entity',
  templateUrl: './dashboard-entity.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardEntityComponent {
  @Input() entity: IDashboardEntity | null = null;
}
