import { LyTheme2 } from '@alyle/ui';
import { ChangeDetectionStrategy, Component } from '@angular/core';

const styles = {
  grow: {
    flexGrow: 1,
  },
};

@Component({
  selector: 'admin-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  classes = this._theme.addStyleSheet(styles);

  MOCK_DATA = {
    username: 'Larm Rmah',
    img: 'https://firebasestorage.googleapis.com/v0/b/alyle-ui.appspot.com/o/img%2Flarm-rmah-47685-unsplash.jpeg?alt=media&token=1db05ae5-9c03-437b-9e8c-764dfb257061',
    notifications: [
      { id: 1, title: 'Update user #1' },
      { id: 2, title: 'Delete pizza with olives' },
    ],
  };

  constructor(private _theme: LyTheme2) {}
}
