import { Provider } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';

export const globalGuards: Provider[] = [
  { provide: APP_GUARD, useClass: AuthGuard },
];
