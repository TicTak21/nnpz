import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IRegisterDto } from '@nnpz/shared/types';

@Component({
  selector: 'admin-feature-register-page',
  templateUrl: './register-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminFeatureRegisterPageComponent {
  handleSubmit(registerDto: IRegisterDto) {
    console.log(registerDto);
  }
}
