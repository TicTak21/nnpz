import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'admin-ui-dashboard-notes',
  templateUrl: './dashboard-notes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminUiDashboardNotesComponent {
  readonly noteMinLength: number = 4;
  readonly noteMaxLength: number = 256;
  readonly form: UntypedFormGroup = new UntypedFormGroup({
    note: new UntypedFormControl('', [
      Validators.required,
      Validators.minLength(this.noteMinLength),
      Validators.maxLength(this.noteMaxLength),
    ]),
  });

  get note(): UntypedFormControl {
    return this.form.get('note') as UntypedFormControl;
  }

  handleReset() {
    this.form.reset();
  }

  handleSubmit() {
    console.log(this.form.value);
  }
}
