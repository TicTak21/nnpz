import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ILoginDto } from '@nnpz/shared/types';

@Component({
  selector: 'nnpz-login-form',
  templateUrl: './nnpz-login-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NnpzLoginFormComponent {
  @Output() handleSubmit$: EventEmitter<ILoginDto> =
    new EventEmitter<ILoginDto>();

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  hide: boolean = true;

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
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
