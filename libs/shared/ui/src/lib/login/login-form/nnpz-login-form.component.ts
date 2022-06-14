import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ILoginDto } from '@nnpz/shared/types';

@Component({
  selector: 'nnpz-login-form',
  templateUrl: './nnpz-login-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NnpzLoginFormComponent {
  @Output() handleSubmit$: EventEmitter<ILoginDto> =
    new EventEmitter<ILoginDto>();

  form: UntypedFormGroup = new UntypedFormGroup({
    email: new UntypedFormControl('', [Validators.required, Validators.email]),
    password: new UntypedFormControl('', [Validators.required]),
  });
  hide: boolean = true;

  get email(): UntypedFormControl {
    return this.form.get('email') as UntypedFormControl;
  }

  get password(): UntypedFormControl {
    return this.form.get('password') as UntypedFormControl;
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
