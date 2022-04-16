import { transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromTheme } from '@nnpz/admin/data-access-theme';
import { EThemes } from '@nnpz/shared/types';
import { flipAnimation } from '@nnpz/shared/ui';
import { Observable } from 'rxjs';

@Component({
  selector: 'admin-feature-theme-switch',
  templateUrl: './theme-switch.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('isDark', [
      transition('true <=> false', [flipAnimation()], {
        params: {
          delay: 0,
          duration: 1000,
        },
      }),
    ]),
  ],
})
export class AdminUiThemeSwitchComponent {
  themeMode$: Observable<EThemes> = new Observable<EThemes>();

  constructor(private readonly store: Store) {
    this.themeMode$ = this.store.select(fromTheme.selectThemeMode);
  }

  handleClick() {
    this.store.dispatch(fromTheme.toggleTheme());
  }
}
