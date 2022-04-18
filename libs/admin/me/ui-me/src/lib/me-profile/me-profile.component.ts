import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'admin-ui-me-profile',
  templateUrl: './me-profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminUiMeProfileComponent {
  @Input() username: string = '';
  @Input() img: string = '';
}
