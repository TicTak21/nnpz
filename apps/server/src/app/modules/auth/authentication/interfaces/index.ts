import { EUserRole } from '@nnpz/types';

export interface ITokenPayload {
  id: string;
  role: EUserRole;
  email: string;
}
