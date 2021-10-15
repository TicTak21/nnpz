import { HttpException, HttpStatus } from '@nestjs/common';

export class AuthHeaderNotFoundException extends HttpException {
  constructor() {
    super('Authorization header not found', HttpStatus.BAD_REQUEST);
  }
}
