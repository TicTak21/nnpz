import { LyTheme2 } from '@alyle/ui';
import { LyDrawer } from '@alyle/ui/drawer';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import * as layoutSelectors from '@nnpz/admin/app/core/layout/store';
import { DirectionService } from '@nnpz/admin/app/core/theme/services/direction.service';
import { Observable, Subscription, tap } from 'rxjs';

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
export class DrawerComponent implements OnInit, OnDestroy {
  @ViewChild('drawer') drawer!: LyDrawer;

  classes = this.theme.addStyleSheet(styles);
  // TODO: HACK:
  // since ngIf removes node from DOM we have a bad animation after drawer added back(e.g. while opening)
  // to prevent this we could either use a default value in component/template
  // or manually subscribe(without async pipe) to the value
  // => Is it possibly to use ngIf + async pipe and do not remove node from DOM?
  opened: boolean = true;
  private opened$: Observable<boolean> = new Observable<boolean>();
  private openedSub: Subscription = new Subscription();

  constructor(
    private readonly theme: LyTheme2,
    private readonly store: Store,
    private readonly directionService: DirectionService,
  ) {
    this.opened$ = this.store
      .select(layoutSelectors.selectDrawerState)
      .pipe(tap(() => this.drawer?.toggle()));
  }

  ngOnInit() {
    this.openedSub = this.opened$.subscribe(opened => (this.opened = opened));
  }

  ngOnDestroy() {
    this.openedSub.unsubscribe();
  }
}
