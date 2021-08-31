import {
  BadRequestException,
  ConflictException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

export const errorHandlers = {
  '404': () => new NotFoundException(),
  '500': () => new InternalServerErrorException(),
  '22P02': () => new BadRequestException(),
  '23505': () => new ConflictException(),
};
