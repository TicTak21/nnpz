import { transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { EThemes } from '@nnpz/shared/types';
import { Observable } from 'rxjs';
import { flipAnimation } from '../../animations';
import * as fromTheme from '../../store';

@Component({
  selector: 'admin-theme-switch',
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
export class ThemeSwitchComponent {
  themeMode$: Observable<EThemes> = new Observable<EThemes>();

  constructor(private readonly store: Store) {
    this.themeMode$ = this.store.select(fromTheme.selectThemeMode);
  }

  handleClick() {
    this.store.dispatch(fromTheme.toggleTheme());
  }
}
