import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'admin-me-profile',
  templateUrl: './me-profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeProfileComponent {
  @Input() username: string = '';
  @Input() img: string = '';
}
