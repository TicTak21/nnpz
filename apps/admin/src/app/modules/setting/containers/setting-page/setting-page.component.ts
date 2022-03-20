import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'admin-setting-page',
  templateUrl: './setting-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingPageComponent {}
