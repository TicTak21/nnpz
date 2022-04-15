import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'admin-ui-settings-delete-account',
  templateUrl: './settings-delete-account.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminUiSettingsDeleteAccountComponent {
  @Output() handleDelete$: EventEmitter<void> = new EventEmitter<void>();

  handleClick() {
    this.handleDelete$.emit();
  }
}
