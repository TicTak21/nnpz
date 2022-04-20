import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ELangs } from '@nnpz/shared/types';
import { Observable } from 'rxjs';

@Component({
  selector: 'admin-ui-header-translate-btn',
  templateUrl: './header-translate-btn.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminUiHeaderTranslateBtnComponent {
  @Input() langs$: Observable<ELangs[]> = new Observable<ELangs[]>();
  @Input() currentLang$: Observable<ELangs> = new Observable<ELangs>();

  @Output() handleLangChange$: EventEmitter<ELangs> =
    new EventEmitter<ELangs>();

  handleClick(lang: ELangs) {
    this.handleLangChange$.emit(lang);
  }
}
