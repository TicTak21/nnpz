import { LyDialog } from '@alyle/ui/dialog';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { filter } from 'rxjs';
import { IEntityFieldConfig } from '../../interfaces';
import { EntityConfigDialogComponent } from '../entity-config-dialog/entity-config-dialog.component';

@Component({
  selector: 'admin-entity-new-form',
  templateUrl: './entity-new-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntityNewFormComponent {
  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  constructor(
    private readonly dialog: LyDialog,
    private readonly cdr: ChangeDetectorRef,
  ) {}

  get controls() {
    return this.form.controls;
  }

  get name(): FormControl {
    return this.form.get('name') as FormControl;
  }

  onSubmit() {
    console.log(this.form.value);
  }

  onAddField() {
    const dialogResult = this.dialog.open<EntityConfigDialogComponent>(
      EntityConfigDialogComponent,
    );

    dialogResult.afterClosed
      .pipe(filter(Boolean))
      .subscribe((field: IEntityFieldConfig) => {
        const { name, initialValue } = field;

        this.form.addControl(
          name,
          // TODO: create custom conditional field validator
          // https://medium.com/ngx/3-ways-to-implement-conditional-validation-of-reactive-forms-c59ed6fc3325
          new FormControl(initialValue, [Validators.required]),
        );

        // HACK: i suppose?
        this.cdr.markForCheck();

        console.log(this.form.controls);
      });
  }

  onRemoveField(ctrlName: string) {
    this.form.removeControl(ctrlName);
  }

  onReset() {
    this.form.reset();
  }
}
