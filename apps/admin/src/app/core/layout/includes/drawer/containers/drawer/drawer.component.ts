import { LyTheme2 } from '@alyle/ui';
import { ChangeDetectionStrategy, Component } from '@angular/core';
const styles = {
  drawerContainer: {
    minHeight: '100vh',
    height: 'auto',
    transform: 'translate3d(0,0,0)',
  },
};
@Component({
  selector: 'admin-drawer',
  templateUrl: './drawer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerComponent {
  classes = this.theme.addStyleSheet(styles);

  constructor(private readonly theme: LyTheme2) {}
}
