import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'admin-avatar',
  templateUrl: './avatar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  @Input() src = '';
  @Input() alt = '';
  @Input() size = 40;

  get altFirstChar(): string {
    return this.alt.charAt(0);
  }
}
