import { LyTheme2 } from '@alyle/ui';
import { Injectable } from '@angular/core';
import { EThemes } from '@nnpz/ui';
import { filter, map, Observable, of, tap, withLatestFrom } from 'rxjs';
import { TStorageItem } from '../../../shared/types';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly storageKey: string = 'theme';
  private readonly itemKey: string = 'themeMode';

  constructor(private readonly theme: LyTheme2) {}

  get currentTheme(): Observable<EThemes> {
    return of(this.theme.variables.name as EThemes);
  }

  get storageTheme(): Observable<EThemes> {
    return of(localStorage.getItem(this.storageKey)).pipe(
      filter(Boolean),
      map<string, TStorageItem<EThemes>>(str => JSON.parse(str)),
      map(json => json[this.itemKey]),
    );
  }

  // TODO: dynamicaly set initialState https://github.com/ngrx/platform/issues/51
  initTheme(): Observable<[EThemes, EThemes]> {
    return this.storageTheme.pipe(
      withLatestFrom(this.currentTheme),
      tap(([storageTheme, currentTheme]) => {
        if (storageTheme !== currentTheme) this.theme.setTheme(storageTheme);
      }),
    );
  }

  toggleTheme(): Observable<void> {
    return this.currentTheme.pipe(
      map(currentTheme =>
        currentTheme === EThemes.dark ? EThemes.light : EThemes.dark,
      ),
      map(newTheme => this.theme.setTheme(newTheme)),
    );
  }
}
