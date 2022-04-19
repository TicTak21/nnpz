import { transition, trigger } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { EThemes } from '@nnpz/shared/types';
import { flipAnimation } from '@nnpz/shared/ui';
import { Observable } from 'rxjs';

@Component({
  selector: 'admin-ui-theme-switch',
  templateUrl: './theme-switch.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('isDark', [
      transition('true <=> false', [flipAnimation()], {
        params: {
          delay: 0,
          duration: 1000,
        },
      }),
    ]),
  ],
})
export class AdminUiThemeSwitchComponent {
  @Input() themeMode$: Observable<EThemes> = new Observable<EThemes>();

  @Output() handleThemeChange$: EventEmitter<void> = new EventEmitter<void>();

  handleClick() {
    this.handleThemeChange$.emit();
  }
}
