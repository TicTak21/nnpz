import { LyTheme2 } from '@alyle/ui';
import { LyDrawer } from '@alyle/ui/drawer';
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromLayout } from '@nnpz/admin/data-access-layout';
import { fromTheme } from '@nnpz/admin/data-access-theme';
import { EThemes } from '@nnpz/shared/types';
import { Observable } from 'rxjs';

const styles = {
  container: {
    gap: '0.25rem',
    top: 0,
    boxShadow: '0 0 10px rgba(0,0,0, 0.5)',
    position: 'sticky',
  },
};

@Component({
  selector: 'admin-feature-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminFeatureHeaderComponent {
  @ViewChild('drawer') drawer!: LyDrawer;

  readonly classes = this.theme.addStyleSheet(styles);
  MOCK_DATA = {
    username: 'Jane Doe',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    notifications: [
      { id: 1, title: 'Update user #1' },
      { id: 2, title: 'Delete pizza with olives' },
    ],
  };
  themeMode$: Observable<EThemes>;

  constructor(private readonly theme: LyTheme2, private readonly store: Store) {
    this.themeMode$ = this.store.select(fromTheme.selectThemeMode);
  }

  toggleDrawer() {
    this.store.dispatch(fromLayout.toggleDrawer());
  }

  handleThemeChange() {
    this.store.dispatch(fromTheme.toggleTheme());
  }
}
