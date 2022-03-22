import { LyTheme2 } from '@alyle/ui';
import { Injectable } from '@angular/core';
import { EThemes } from '@nnpz/ui';
import { filter, map, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly storageKey: string = 'theme';
  private readonly itemKey: string = 'themeMode';

  constructor(private readonly theme: LyTheme2) {}

  get currentTheme(): EThemes {
    return this.theme.variables.name as EThemes;
  }

  // TODO: dynamicaly set initialState https://github.com/ngrx/platform/issues/51
  initTheme() {
    return of(localStorage.getItem(this.storageKey)).pipe(
      filter(Boolean),
      map(str => JSON.parse(str)),
      map(json => json[this.itemKey]),
      tap((storageTheme: EThemes) => this.theme.setTheme(storageTheme)),
    );
  }

  toggleTheme() {
    return of(
      this.currentTheme === EThemes.dark ? EThemes.light : EThemes.dark,
    ).pipe(map((newTheme: EThemes) => this.theme.setTheme(newTheme)));
  }
}
