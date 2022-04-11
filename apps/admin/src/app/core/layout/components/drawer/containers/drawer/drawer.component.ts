import { Dir, LyTheme2 } from '@alyle/ui';
import { LyDrawer } from '@alyle/ui/drawer';
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromAuth from '../../../../../../core/auth/store';
import * as fromLayout from '../../../../../../core/layout/store';
import * as fromRouter from '../../../../../../core/router/store';
import { ELayoutType } from '../../../../enums';
import { ILayoutTypeItem } from '../../../../interfaces';

const styles = {
  container: {
    minHeight: '100vh',
    height: 'auto',
    transform: 'translate3d(0, 0, 0)',
  },
  ctrls: {
    padding: '0.75rem 1rem',
    display: 'grid',
    gap: '0.75rem',
    button: {
      width: '100%',
    },
  },
};

@Component({
  selector: 'admin-drawer',
  templateUrl: './drawer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerComponent {
  @ViewChild('drawer') drawer!: LyDrawer;

  readonly classes = this.theme.addStyleSheet(styles);

  direction$: Observable<Dir> = new Observable<Dir>();
  url$: Observable<string> = new Observable<string>();
  opened$: Observable<boolean> = new Observable<boolean>();
  layoutType$: Observable<ELayoutType> = new Observable<ELayoutType>();
  isLogged$: Observable<boolean> = new Observable<boolean>();

  constructor(private readonly theme: LyTheme2, private readonly store: Store) {
    this.opened$ = this.store.select(fromLayout.selectDrawerOpened);
    this.direction$ = this.store.select(fromLayout.selectDirection);
    this.layoutType$ = this.store.select(fromLayout.selectLayoutType);
    this.url$ = this.store.select(fromRouter.selectUrl);
    this.isLogged$ = this.store.select(fromAuth.selectIsLogged);
  }

  toggleDirection() {
    this.store.dispatch(fromLayout.toggleDirection());
  }

  changeLayout({ type }: ILayoutTypeItem) {
    this.store.dispatch(
      fromLayout.changeLayout({ payload: { layoutType: type } }),
    );
  }

  handleLogout() {
    this.store.dispatch(fromAuth.logout());
  }
}
