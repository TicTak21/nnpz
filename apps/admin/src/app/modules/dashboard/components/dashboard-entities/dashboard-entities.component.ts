import { LyTheme2 } from '@alyle/ui';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IDashboardEntity } from '@nnpz/shared/types';

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
  selector: 'admin-dashboard-entities',
  templateUrl: './dashboard-entities.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardEntitiesComponent {
  @Input() entities: IDashboardEntity[] = [] as IDashboardEntity[];

  readonly classes = this.theme.addStyleSheet(styles);

  constructor(private readonly theme: LyTheme2) {}
}
