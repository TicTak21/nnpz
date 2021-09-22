import { pbkdf2Sync, randomBytes } from 'crypto';

export class HashService {
  hashPassword(password: string): string {
    const salt = randomBytes(16).toString('hex');

    return pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  }
}
