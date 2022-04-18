import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ILoginDto } from '@nnpz/shared/util';

@Component({
  selector: 'admin-feature-login-page',
  templateUrl: './login-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminFeatureLoginPageComponent {
  handleSubmit(loginDto: ILoginDto) {
    console.log(loginDto);
  }
}
