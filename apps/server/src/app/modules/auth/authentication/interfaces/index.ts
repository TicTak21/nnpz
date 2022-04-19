import { EUserRole } from '@nnpz/shared/types';
import { Request, Response } from 'express';

export interface ITokenPayload {
  id: string;
  role: EUserRole;
  email: string;
}

export interface GqlContext {
  req: Request;
  res: Response;
}
