import { LyTheme2 } from '@alyle/ui';
import { LyDrawer } from '@alyle/ui/drawer';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
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
export class DrawerComponent implements OnInit, OnDestroy {
  @ViewChild('drawer') drawer!: LyDrawer;

  classes = this.theme.addStyleSheet(styles);
  opened$: Observable<boolean> = new Observable<boolean>();
  private openedSub: Subscription = new Subscription();

  constructor(
    private readonly theme: LyTheme2,
    private readonly store: Store,
    private readonly cdr: ChangeDetectorRef,
  ) {
    this.opened$ = this.store.select(layoutSelectors.selectDrawerState);
  }

  ngOnInit() {
    // HACK:
    // consider to use `share()` for sub + async pipe
    // or rewrite this somehow
    this.openedSub = this.opened$.subscribe(() => {
      this.drawer?.toggle();
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy() {
    this.openedSub.unsubscribe();
  }
}
