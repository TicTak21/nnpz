import {
  BadRequestException,
  ConflictException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { EDbStatus } from '../enums';
import { ErrorHandler, TError } from '../types';

@Injectable()
export class ErrorService {
  public readonly handlersReducer = {
    [HttpStatus.BAD_REQUEST]: () => new BadRequestException(),
    [HttpStatus.NOT_FOUND]: () => new NotFoundException(),
    [HttpStatus.INTERNAL_SERVER_ERROR]: () =>
      new InternalServerErrorException(),
    [EDbStatus.INVALID_INPUT]: () => new BadRequestException(),
    [EDbStatus.CONFLICT]: () => new ConflictException(),
    [HttpStatus.CONFLICT]: () => new ConflictException(),
  };

  handle(err: TError): Observable<never> {
    const errorHandler: ErrorHandler =
      this.handlersReducer[err.code] ||
      this.handlersReducer[HttpStatus.INTERNAL_SERVER_ERROR];

    return throwError(errorHandler);
  }
}
