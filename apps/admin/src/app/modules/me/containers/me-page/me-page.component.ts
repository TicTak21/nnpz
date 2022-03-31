import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IUserEntity } from '@nnpz/types';

@Component({
  selector: 'admin-me-page',
  templateUrl: './me-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MePageComponent {
  MOCK_DATA = {
    username: 'Jane Doe',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    isOnline: true,
  };

  handleSubmit(userDto: IUserEntity) {
    console.log(userDto);
  }
}
