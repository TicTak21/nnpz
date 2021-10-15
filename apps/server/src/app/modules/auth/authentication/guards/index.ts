import { Provider } from '@nestjs/common';
import { HttpAuthGuard } from './http/http-auth.guard';

export const guards: Provider[] = [HttpAuthGuard];
