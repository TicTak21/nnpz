import { LyDialogRef } from '@alyle/ui/dialog';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'admin-entity-config-dialog',
  templateUrl: './entity-config-dialog.component.html',

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntityConfigDialogComponent {
  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    initialValue: new FormControl('', [Validators.required]),
    required: new FormControl(true, [Validators.required]),
  });

  get name(): FormControl {
    return this.form.get('name') as FormControl;
  }

  get initialValue(): FormControl {
    return this.form.get('initialValue') as FormControl;
  }

  constructor(public readonly dialogRef: LyDialogRef) {}

  handleSubmit() {
    this.dialogRef.close(this.form.value);
  }
}
