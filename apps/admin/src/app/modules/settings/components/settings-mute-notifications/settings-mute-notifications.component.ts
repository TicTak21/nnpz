import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'admin-settings-mute-notifications',
  templateUrl: './settings-mute-notifications.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsMuteNotificationsComponent {
  @Output() handleMute$: EventEmitter<boolean> = new EventEmitter<boolean>();

  handleChange(newValue: boolean) {
    this.handleMute$.emit(newValue);
  }
}
