import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'admin-drawer-logout-btn',
  templateUrl: './drawer-logout-btn.component.html',

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerLogoutBtnComponent {
  @Output() handleLogout: EventEmitter<void> = new EventEmitter<void>();

  handleClick() {
    this.handleLogout.emit();
  }
}
