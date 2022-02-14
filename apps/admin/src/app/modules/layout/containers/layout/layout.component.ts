import { LyTheme2 } from '@alyle/ui';
import { ChangeDetectionStrategy, Component } from '@angular/core';

const styles = {
  padding: {
    padding: '1rem',
  },
};

@Component({
  selector: 'admin-layout',
  templateUrl: './layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  classes = this.theme.addStyleSheet(styles);

  constructor(private readonly theme: LyTheme2) {}
}
