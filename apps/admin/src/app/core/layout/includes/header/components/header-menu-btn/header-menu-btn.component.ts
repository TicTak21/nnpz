import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'admin-header-menu-btn',
  templateUrl: './header-menu-btn.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderMenuBtnComponent {
  @Output() toggleDrawer$: EventEmitter<void> = new EventEmitter<void>();

  handleClick() {
    this.toggleDrawer$.emit();
  }
}
