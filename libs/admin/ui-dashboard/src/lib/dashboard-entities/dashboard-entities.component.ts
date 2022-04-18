import { LyTheme2 } from '@alyle/ui';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IDashboardEntity } from '@nnpz/shared/util';

const styles = {
  entities: {
    display: 'grid',
    overflowX: 'auto',
    gap: '1rem',
    gridAutoFlow: 'column',
    gridAutoColumns: 'minmax(256px, auto)',
    height: '100%',
  },
};

@Component({
  selector: 'admin-ui-dashboard-entities',
  templateUrl: './dashboard-entities.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminUiDashboardEntitiesComponent {
  @Input() entities: IDashboardEntity[] = [] as IDashboardEntity[];

  readonly classes = this.theme.addStyleSheet(styles);

  constructor(private readonly theme: LyTheme2) {}
}
