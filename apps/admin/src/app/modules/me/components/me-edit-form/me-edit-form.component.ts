import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'admin-me-edit-form',
  templateUrl: './me-edit-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeEditFormComponent {}
