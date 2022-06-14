import { LyDialogRef } from '@alyle/ui/dialog';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'admin-ui-entities-config-dialog',
  templateUrl: './entities-config-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminUiEntitiesConfigDialogComponent {
  form: UntypedFormGroup = new UntypedFormGroup({
    name: new UntypedFormControl('', [Validators.required]),
    initialValue: new UntypedFormControl('', [Validators.required]),
    required: new UntypedFormControl(true, [Validators.required]),
  });

  get name(): UntypedFormControl {
    return this.form.get('name') as UntypedFormControl;
  }

  get initialValue(): UntypedFormControl {
    return this.form.get('initialValue') as UntypedFormControl;
  }

  constructor(public readonly dialogRef: LyDialogRef) {}

  handleSubmit() {
    this.dialogRef.close(this.form.value);
  }
}
