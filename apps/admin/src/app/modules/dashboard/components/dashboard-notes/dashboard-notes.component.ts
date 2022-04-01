import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'admin-dashboard-notes',
  templateUrl: './dashboard-notes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardNotesComponent {
  readonly noteMinLength: number = 4;
  readonly noteMaxLength: number = 256;
  readonly form: FormGroup = new FormGroup({
    note: new FormControl('', [
      Validators.required,
      Validators.minLength(this.noteMinLength),
      Validators.maxLength(this.noteMaxLength),
    ]),
  });

  get note(): FormControl {
    return this.form.get('note') as FormControl;
  }

  handleReset() {
    this.form.reset();
  }

  handleSubmit() {
    console.log(this.form.value);
  }
}
