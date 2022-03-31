import { Dir } from '@alyle/ui';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'admin-drawer-dir-btn',
  templateUrl: './drawer-dir-btn.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerDirBtnComponent {
  @Input() direction$: Observable<Dir> = new Observable<Dir>();

  @Output() toggleDirection$: EventEmitter<Dir> = new EventEmitter<Dir>();

  handleClick() {
    this.toggleDirection$.emit();
  }
}
