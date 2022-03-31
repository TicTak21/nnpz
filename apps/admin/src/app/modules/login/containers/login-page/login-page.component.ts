import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ILoginDto } from '@nnpz/types';

@Component({
  selector: 'admin-login-page',
  templateUrl: './login-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  handleSubmit(loginDto: ILoginDto) {
    console.log(loginDto);
  }
}
