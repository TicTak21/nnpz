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

  constructor(public readonly dialogRef: LyDialogRef) {}

  onSubmit() {
    this.dialogRef.close(this.form.value);
  }
}
