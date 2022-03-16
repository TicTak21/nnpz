import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { EThemes } from '@nnpz/ui';
import { Observable } from 'rxjs';
import * as fromTheme from '../../store';

@Component({
  selector: 'admin-theme-switch',
  templateUrl: './theme-switch.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSwitchComponent {
  themeMode$: Observable<EThemes> = new Observable<EThemes>();

  constructor(private readonly store: Store) {
    this.themeMode$ = this.store.select(fromTheme.selectThemeMode);
  }

  handleClick(currentTheme: EThemes) {
    this.store.dispatch(fromTheme.toggleTheme({ payload: { currentTheme } }));
  }
}
