import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'admin-theme-switch',
  templateUrl: './theme-switch.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSwitchComponent {
  constructor(private readonly themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
