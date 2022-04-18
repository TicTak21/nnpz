import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators, IRegisterDto } from '@nnpz/shared/util';

@Component({
  selector: 'nnpz-register-form',
  templateUrl: './nnpz-register-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NnpzRegisterFormComponent {
  @Output() handleSubmit$: EventEmitter<IRegisterDto> =
    new EventEmitter<IRegisterDto>();

  form: FormGroup = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    },
    { validators: CustomValidators.match('password', 'confirmPassword') },
  );
  hide: boolean = true;

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

  get confirmPassword(): FormControl {
    return this.form.get('confirmPassword') as FormControl;
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
