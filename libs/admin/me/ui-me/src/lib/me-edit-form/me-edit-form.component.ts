import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { EUserRole, IUserEntity } from '@nnpz/shared/types';

@Component({
  selector: 'admin-ui-me-edit-form',
  templateUrl: './me-edit-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminUiMeEditFormComponent {
  @Output() handleSubmit$: EventEmitter<IUserEntity> =
    new EventEmitter<IUserEntity>();

  form: UntypedFormGroup = new UntypedFormGroup({
    email: new UntypedFormControl('', [Validators.required]),
    password: new UntypedFormControl('', [Validators.required]),
    role: new UntypedFormControl(EUserRole.admin, [Validators.required]),
  });

  get roles(): string[] {
    return Object.keys(EUserRole);
  }

  handleSubmit() {
    this.handleSubmit$.emit(this.form.value);
  }

  handleReset() {
    this.form.reset({ email: '', password: '', role: EUserRole.admin });
  }
}
