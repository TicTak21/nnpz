import { LyTheme2 } from '@alyle/ui';
import { LyDrawer } from '@alyle/ui/drawer';
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import * as layoutSelectors from '../../../../store/selectors';

const styles = {
  drawerContainer: {
    minHeight: '100vh',
    height: 'auto',
    transform: 'translate3d(0, 0, 0)',
  },
};

@Component({
  selector: 'admin-drawer',
  templateUrl: './drawer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerComponent {
  @ViewChild('drawer') drawer!: LyDrawer;

  classes = this.theme.addStyleSheet(styles);
  opened$: Observable<boolean> = new Observable<boolean>();

  constructor(private readonly theme: LyTheme2, private readonly store: Store) {
    this.opened$ = this.store
      .select(layoutSelectors.selectDrawerState)
      .pipe(tap(() => this.drawer?.toggle()));
  }
}
