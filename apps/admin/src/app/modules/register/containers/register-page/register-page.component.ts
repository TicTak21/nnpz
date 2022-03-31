import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IRegisterDto } from '@nnpz/types';

@Component({
  selector: 'admin-register-page',
  templateUrl: './register-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPageComponent {
  handleSubmit(registerDto: IRegisterDto) {
    console.log(registerDto);
  }
}
