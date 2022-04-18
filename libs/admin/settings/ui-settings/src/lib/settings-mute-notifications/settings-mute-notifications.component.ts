import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'admin-ui-settings-mute-notifications',
  templateUrl: './settings-mute-notifications.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminUiSettingsMuteNotificationsComponent {
  @Output() handleMute$: EventEmitter<boolean> = new EventEmitter<boolean>();

  handleChange(newValue: boolean) {
    this.handleMute$.emit(newValue);
  }
}
