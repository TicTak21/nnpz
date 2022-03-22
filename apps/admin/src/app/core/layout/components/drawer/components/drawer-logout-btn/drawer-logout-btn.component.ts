import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'admin-drawer-logout-btn',
  templateUrl: './drawer-logout-btn.component.html',

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerLogoutBtnComponent {
  logged: boolean = true;

  handleClick() {
    this.logged = !this.logged;
  }
}
