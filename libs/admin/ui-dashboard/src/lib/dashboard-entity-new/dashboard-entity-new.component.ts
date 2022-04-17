import { LyTheme2 } from '@alyle/ui';
import { ChangeDetectionStrategy, Component } from '@angular/core';

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
  selector: 'admin-ui-dashboard-entity-new',
  templateUrl: './dashboard-entity-new.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminUiDashboardEntityNewComponent {
  readonly classes = this.theme.addStyleSheet(styles);

  constructor(private readonly theme: LyTheme2) {}
}
