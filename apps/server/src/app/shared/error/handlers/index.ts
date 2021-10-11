import {
  BadRequestException,
  ConflictException,
  HttpStatus,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { throwError } from 'rxjs';
import { EDbStatus } from '../enums';
import { ErrorHandler, TError } from '../types';

const errorHandlersReducer = {
  [HttpStatus.BAD_REQUEST]: () => new BadRequestException(),
  [HttpStatus.NOT_FOUND]: () => new NotFoundException(),
  [HttpStatus.INTERNAL_SERVER_ERROR]: () => new InternalServerErrorException(),
  [EDbStatus.INVALID_INPUT]: () => new BadRequestException(),
  [EDbStatus.CONFLICT]: () => new ConflictException(),
  [HttpStatus.CONFLICT]: () => new ConflictException(),
};

export const handleError = (err: TError) => {
  const errorHandler: ErrorHandler =
    errorHandlersReducer[err.code] ||
    errorHandlersReducer[HttpStatus.INTERNAL_SERVER_ERROR];

  return throwError(errorHandler);
};
