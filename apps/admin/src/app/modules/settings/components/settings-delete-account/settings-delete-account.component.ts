import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'admin-settings-delete-account',
  templateUrl: './settings-delete-account.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsDeleteAccountComponent {
  @Output() handleDelete: EventEmitter<void> = new EventEmitter<void>();

  handleClick() {
    this.handleDelete.emit();
  }
}
