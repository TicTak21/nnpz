import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'admin-settings-terminate-sessions',
  templateUrl: './settings-terminate-sessions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsTerminateSessionsComponent {
  @Output() handleTerminate: EventEmitter<void> = new EventEmitter<void>();

  handleClick() {
    this.handleTerminate.emit();
  }
}
