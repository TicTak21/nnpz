import { LyDialog } from '@alyle/ui/dialog';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '@nnpz/shared/ui';
import { filter } from 'rxjs';
import { AdminUiEntitiesConfigDialogComponent } from '../entities-config-dialog/entities-config-dialog.component';
import { IEntityFieldConfig } from '../interfaces';

@Component({
  selector: 'admin-ui-entities-new-form',
  templateUrl: './entities-new-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminUiEntitiesNewFormComponent {
  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    fields: new FormGroup({}),
  });

  constructor(
    private readonly dialog: LyDialog,
    private readonly cdr: ChangeDetectorRef,
  ) {}

  get fields() {
    return this.form.get('fields') as FormGroup;
  }

  get name(): FormControl {
    return this.form.get('name') as FormControl;
  }

  get fieldsConfig() {
    const formControls = { ...this.fields.controls };
    const keys = Object.keys(formControls);
    const config = keys.map(key => {
      const ctrl = formControls[key];

      return {
        name: key,
        initialValue: ctrl.value,
      };
    });

    return config;
  }

  handleAddField() {
    const dialogResult = this.dialog.open<AdminUiEntitiesConfigDialogComponent>(
      AdminUiEntitiesConfigDialogComponent,
    );

    dialogResult.afterClosed
      .pipe(filter(Boolean))
      .subscribe((field: IEntityFieldConfig) => {
        const { name, initialValue, required } = field;

        this.fields.addControl(
          name,
          new FormControl(initialValue, [
            CustomValidators.conditionalRequired(required),
          ]),
        );

        // HACK: i suppose?
        this.cdr.detectChanges();
      });
  }

  handleRemoveField(ctrlName: string) {
    this.fields.removeControl(ctrlName);
  }

  handleSubmit() {
    console.log(this.form.value);
  }

  handleReset() {
    this.form.reset();
  }
}
