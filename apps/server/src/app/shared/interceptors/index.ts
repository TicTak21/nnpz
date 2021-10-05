import { Provider } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { GqlLoggingInterceptor } from './logging/gql/gql-logging.interceptor';
import { HttpLoggingInterceptor } from './logging/http/http-logging.interceptor';

export const globalInterceptors: Provider[] = [
  { provide: APP_INTERCEPTOR, useClass: HttpLoggingInterceptor },
  { provide: APP_INTERCEPTOR, useClass: GqlLoggingInterceptor },
];
