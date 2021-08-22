import { Message } from '@client/server-interfaces';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to server!' };
  }
}
