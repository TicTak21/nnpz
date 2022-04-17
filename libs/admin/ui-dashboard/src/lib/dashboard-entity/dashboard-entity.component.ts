import { LyTheme2 } from '@alyle/ui';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IDashboardEntity } from '@nnpz/shared/types';

const styles = {
  grid: {
    height: '100%',
    gridTemplateRows: 'repeat(2, 1fr)',
  },
  ctrls: {
    display: 'flex',
    alignItems: 'flex-end',
  },
};

@Component({
  selector: 'admin-ui-dashboard-entity',
  templateUrl: './dashboard-entity.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminUiDashboardEntityComponent {
  @Input() entity: IDashboardEntity | null = null;

  readonly classes = this.theme.addStyleSheet(styles);

  constructor(private readonly theme: LyTheme2) {}
}
