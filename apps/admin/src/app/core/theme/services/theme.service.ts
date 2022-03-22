import { LyTheme2 } from '@alyle/ui';
import { Injectable } from '@angular/core';
import { EThemes } from '@nnpz/ui';

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
    const localStorageTheme = localStorage.getItem(this.storageKey);

    if (!localStorageTheme) return;

    const parsedLocalStorageTheme = JSON.parse(localStorageTheme);
    const localStorageThemeMode: EThemes =
      parsedLocalStorageTheme[this.itemKey];

    this.theme.setTheme(localStorageThemeMode);
  }

  // private checkThemePreferences(): EThemes {
  //   const { defaultLightTheme, defaultDarkTheme } = this;

  //   if (!window.matchMedia) return defaultLightTheme;

  //   const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  //   if (isDark) return defaultDarkTheme;

  //   return defaultLightTheme;
  // }
}
