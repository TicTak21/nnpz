import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EUserRole, IUserEntity } from '@nnpz/types';

@Component({
  selector: 'admin-me-edit-form',
  templateUrl: './me-edit-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeEditFormComponent {
  @Output() handleSubmit$: EventEmitter<IUserEntity> =
    new EventEmitter<IUserEntity>();

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    role: new FormControl(EUserRole.admin, [Validators.required]),
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
