import { lyl, LyTheme2 } from '@alyle/ui';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppThemeVariables } from '@nnpz/admin/app/core/theme/types';

const styles = (theme: AppThemeVariables) => {
  return {
    notifications: lyl`{
      border: 1px solid ${theme.accent.default}
      border-radius: ${theme.borderRadius.default}
    }`,
    dangerZone: lyl`{
      border: 1px solid ${theme.warn.default}
      border-radius: ${theme.borderRadius.default}
    }`,
  };
};

@Component({
  selector: 'admin-settings-page',
  templateUrl: './settings-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsPageComponent {
  readonly classes = this.theme.addStyleSheet(styles);

  constructor(private readonly theme: LyTheme2) {}

  handleTerminate() {
    console.log('terminate sessions');
  }

  handleDelete() {
    console.log('delete account');
  }

  handleMute(isMuted: boolean) {
    console.log(`notifications muted: ${isMuted}`);
  }
}
