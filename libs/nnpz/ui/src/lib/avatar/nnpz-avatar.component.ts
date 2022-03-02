import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'nnpz-avatar',
  templateUrl: './nnpz-avatar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NnpzAvatarComponent {
  @Input() src: string = '';
  @Input() alt: string = '';
  @Input() size: number = 40;
  @Input() href: string = '/me';

  get altFirstChar(): string {
    return this.alt.charAt(0);
  }
}
