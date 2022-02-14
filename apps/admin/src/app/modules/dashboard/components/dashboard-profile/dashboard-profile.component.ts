import { LyTheme2 } from '@alyle/ui';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

const styles = {
  center: {
    display: 'flex !important',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
};

@Component({
  selector: 'admin-dashboard-profile',
  templateUrl: './dashboard-profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardProfileComponent {
  classes = this.theme.addStyleSheet(styles);

  constructor(private readonly theme: LyTheme2) {}

  @Input() username = '';
  @Input() img = '';
}
