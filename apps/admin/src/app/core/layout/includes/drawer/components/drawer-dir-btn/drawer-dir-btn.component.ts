import { Dir } from '@alyle/ui';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromTheme from '@nnpz/admin/app/core/theme/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'admin-drawer-dir-btn',
  templateUrl: './drawer-dir-btn.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerDirBtnComponent {
  isLtr$: Observable<boolean> = new Observable<boolean>();
  direction$: Observable<Dir> = new Observable<Dir>();

  constructor(private readonly store: Store) {
    this.isLtr$ = this.store.select(fromTheme.selectIsLtr);
    this.direction$ = this.store.select(fromTheme.selectDirection);
  }

  handleClick() {
    this.store.dispatch(fromTheme.toggleDirection());
  }
}
