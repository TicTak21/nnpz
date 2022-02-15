import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeService } from '../../../../core/theme/services/theme.service';

@Component({
  selector: 'admin-header-theme-switch',
  templateUrl: './header-theme-switch.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderThemeSwitchComponent {
  constructor(private readonly themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
