import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'admin-ui-header-menu-btn',
  templateUrl: './header-menu-btn.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminUiHeaderMenuBtnComponent {
  @Output() toggleDrawer$: EventEmitter<void> = new EventEmitter<void>();

  handleClick() {
    this.toggleDrawer$.emit();
  }
}
