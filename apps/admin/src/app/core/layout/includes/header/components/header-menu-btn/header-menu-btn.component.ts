import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
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

  constructor(private readonly cdr: ChangeDetectorRef) {}

  clickHandler() {
    this.toggleDrawer$.emit();
  }
}
