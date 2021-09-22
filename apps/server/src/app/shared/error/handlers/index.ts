import {
  BadRequestException,
  ConflictException,
  HttpStatus,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

enum EDbStatus {
  INVALID_INPUT = '22P02',
  CONFLICT = '23505',
}

export const errorHandlers = {
  [HttpStatus.NOT_FOUND]: () => new NotFoundException(),
  [HttpStatus.INTERNAL_SERVER_ERROR]: () => new InternalServerErrorException(),
  [EDbStatus.INVALID_INPUT]: () => new BadRequestException(),
  [EDbStatus.CONFLICT]: () => new ConflictException(),
  [HttpStatus.CONFLICT]: () => new ConflictException(),
};
