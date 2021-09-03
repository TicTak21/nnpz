import { Provider } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { GqlExceptionFilter } from './gql/gql-exception.filter';
import { HttpExceptionFilter } from './http/http-exception.filter';

export const globalFilters: Provider[] = [
  { provide: APP_FILTER, useClass: GqlExceptionFilter },
  { provide: APP_FILTER, useClass: HttpExceptionFilter },
];