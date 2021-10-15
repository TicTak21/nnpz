import { Provider } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { HttpAuthGuard } from './http/http-auth.guard';

export const globalGuards: Provider[] = [
  { provide: APP_GUARD, useClass: HttpAuthGuard },
];
