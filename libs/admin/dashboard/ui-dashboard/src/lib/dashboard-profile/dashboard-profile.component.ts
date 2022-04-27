import { LyTheme2 } from '@alyle/ui';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

const styles = {
  container: {
    display: 'flex !important',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
};

@Component({
  selector: 'admin-ui-dashboard-profile',
  templateUrl: './dashboard-profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminUiDashboardProfileComponent {
  @Input() username: string = '';
  @Input() img: string = '';

  @Output() handleLogoutChange$: EventEmitter<void> = new EventEmitter<void>();

  readonly classes = this.theme.addStyleSheet(styles);

  constructor(private readonly theme: LyTheme2) {}

  handleLogout() {
    this.handleLogoutChange$.emit();
  }
}
