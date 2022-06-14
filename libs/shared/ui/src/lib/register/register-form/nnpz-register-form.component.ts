import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { IRegisterDto } from '@nnpz/shared/types';
import { CustomValidators } from '@nnpz/shared/util';

@Component({
  selector: 'nnpz-register-form',
  templateUrl: './nnpz-register-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NnpzRegisterFormComponent {
  @Output() handleSubmit$: EventEmitter<IRegisterDto> =
    new EventEmitter<IRegisterDto>();

  form: UntypedFormGroup = new UntypedFormGroup(
    {
      email: new UntypedFormControl('', [Validators.required, Validators.email]),
      password: new UntypedFormControl('', [Validators.required]),
      confirmPassword: new UntypedFormControl('', [Validators.required]),
    },
    { validators: CustomValidators.match('password', 'confirmPassword') },
  );
  hide: boolean = true;

  get email(): UntypedFormControl {
    return this.form.get('email') as UntypedFormControl;
  }

  get password(): UntypedFormControl {
    return this.form.get('password') as UntypedFormControl;
  }

  get confirmPassword(): UntypedFormControl {
    return this.form.get('confirmPassword') as UntypedFormControl;
  }

  handleSubmit() {
    if (this.form.valid) {
      this.handleSubmit$.emit(this.form.value);
    }
  }

  handleReset() {
    this.form.reset();
  }

  togglePassVisability() {
    this.hide = !this.hide;
  }
}
