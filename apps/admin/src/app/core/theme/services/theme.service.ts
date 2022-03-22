import { LyTheme2 } from '@alyle/ui';
import { Injectable } from '@angular/core';
import { EThemes } from '@nnpz/ui';
import { filter, map, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly storageKey: string = 'theme';
  private readonly itemKey: string = 'themeMode';
  // private readonly defaultLightTheme = EThemes.light;
  // private readonly defaultDarkTheme = EThemes.dark;

  constructor(private readonly theme: LyTheme2) {}

  get currentTheme(): EThemes {
    return this.theme.variables.name as EThemes;
  }

  toggleTheme() {
    const newTheme =
      this.currentTheme === EThemes.dark ? EThemes.light : EThemes.dark;

    this.theme.setTheme(newTheme);
  }

  // TODO: dynamicaly set initialState https://github.com/ngrx/platform/issues/51
  setInitialTheme() {
    return of(localStorage.getItem(this.storageKey)).pipe(
      filter(Boolean),
      map(str => JSON.parse(str)),
      map(json => json[this.itemKey]),
      tap((storageTheme: EThemes) => this.theme.setTheme(storageTheme)),
    );
  }

  // private checkThemePreferences(): EThemes {
  //   const { defaultLightTheme, defaultDarkTheme } = this;

  //   if (!window.matchMedia) return defaultLightTheme;

  //   const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  //   if (isDark) return defaultDarkTheme;

  //   return defaultLightTheme;
  // }
}
