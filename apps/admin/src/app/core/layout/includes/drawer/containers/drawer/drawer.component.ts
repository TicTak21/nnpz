import { Dir, LyTheme2 } from '@alyle/ui';
import { LyDrawer } from '@alyle/ui/drawer';
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromLayout from '@nnpz/admin/app/core/layout/store';
import * as fromRouter from '@nnpz/admin/app/core/router/store';
import { Observable } from 'rxjs';

const styles = {
  container: {
    minHeight: '100vh',
    height: 'auto',
    transform: 'translate3d(0, 0, 0)',
  },
  ctrls: {
    padding: '1.5rem',
    display: 'grid',
    gap: '1rem',
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

  constructor(private readonly theme: LyTheme2, private readonly store: Store) {
    this.opened$ = this.store.select(fromLayout.selectDrawerOpened);
    this.direction$ = this.store.select(fromLayout.selectDirection);
    this.url$ = this.store.select(fromRouter.selectUrl);
  }

  toggleDirection(currentDirection: Dir) {
    this.store.dispatch(
      fromLayout.toggleDirection({ payload: { currentDirection } }),
    );
  }
}
