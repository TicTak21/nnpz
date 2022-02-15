import { LyTheme2 } from '@alyle/ui';
import { Injectable } from '@angular/core';
import { EThemes } from '@nnpz/ui';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  // TODO: replace with smth like this.theme.currentTheme
  private currentTheme: EThemes = EThemes.dark;
  private readonly storageKey: string = 'alyle-theme';
  private readonly defaultLightTheme = EThemes.light;
  private readonly defaultDarkTheme = EThemes.dark;

  constructor(private readonly theme: LyTheme2) {
    this.setInitialTheme();
  }

  toggleTheme() {
    if (this.currentTheme === EThemes.dark) {
      this.setTheme(EThemes.light);
      return;
    }

    this.setTheme(EThemes.dark);
  }

  setTheme(themeToSet: EThemes) {
    this.theme.setTheme(themeToSet);
    localStorage.setItem(this.storageKey, themeToSet);
    this.currentTheme = themeToSet;
  }

  private setInitialTheme() {
    const localStorageTheme = localStorage.getItem(this.storageKey) as EThemes;

    if (!localStorageTheme) {
      const preferedTheme = this.checkThemePreferences();
      this.setTheme(preferedTheme);

      return;
    }

    this.setTheme(localStorageTheme);
  }

  private checkThemePreferences(): EThemes {
    const { defaultLightTheme, defaultDarkTheme } = this;

    if (!window.matchMedia) return defaultLightTheme;

    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (isDark) return defaultDarkTheme;

    return defaultLightTheme;
  }
}
