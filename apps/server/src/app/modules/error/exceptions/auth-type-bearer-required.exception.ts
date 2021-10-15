import { HttpException, HttpStatus } from '@nestjs/common';

export class AuthTypeBearerRequired extends HttpException {
  constructor() {
    super("Authentication type 'Bearer' required", HttpStatus.BAD_REQUEST);
  }
}
