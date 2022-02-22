import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EThemes } from '@nnpz/ui';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'admin-theme-switch',
  templateUrl: './theme-switch.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('isDark', [
      transition('true <=> false', [
        style({
          transform: `scale(1.25)`,
          opacity: 0,
        }),
        animate('.3s 0s ease-in-out'),
      ]),
    ]),
  ],
})
export class ThemeSwitchComponent {
  constructor(private readonly themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  get isDark(): boolean {
    return this.themeService.currentTheme === EThemes.dark;
  }
}
