import { LyTheme2 } from '@alyle/ui';
import { ChangeDetectionStrategy, Component } from '@angular/core';

const styles = {
  container: {
    gap: '0.25rem',
    boxShadow: '0 0 10px rgba(0,0,0, 0.5)',
    zIndex: 99,
  },
};

@Component({
  selector: 'admin-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  classes = this.theme.addStyleSheet(styles);

  MOCK_DATA = {
    username: 'Jane Doe',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    notifications: [
      { id: 1, title: 'Update user #1' },
      { id: 2, title: 'Delete pizza with olives' },
    ],
  };

  constructor(private readonly theme: LyTheme2) {}
}
