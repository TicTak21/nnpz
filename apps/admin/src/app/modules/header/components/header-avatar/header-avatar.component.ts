import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'admin-header-avatar',
  templateUrl: './header-avatar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderAvatarComponent {
  @Input() src = '';
  @Input() alt = '';

  get altFirstChar(): string {
    return this.alt.charAt(0);
  }
}
