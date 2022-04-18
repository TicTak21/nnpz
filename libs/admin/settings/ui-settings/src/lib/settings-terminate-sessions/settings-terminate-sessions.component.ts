import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'admin-ui-settings-terminate-sessions',
  templateUrl: './settings-terminate-sessions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminUiSettingsTerminateSessionsComponent {
  @Output() handleTerminate$: EventEmitter<void> = new EventEmitter<void>();

  handleClick() {
    this.handleTerminate$.emit();
  }
}
