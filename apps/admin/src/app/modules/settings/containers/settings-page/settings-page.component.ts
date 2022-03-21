import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'admin-settings-page',
  templateUrl: './settings-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsPageComponent {}
