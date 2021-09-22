import { Injectable } from '@nestjs/common';
import { pbkdf2Sync, randomBytes } from 'crypto';

@Injectable()
export class HashService {
  hash(str: string): string {
    const salt = randomBytes(16).toString('hex');

    return pbkdf2Sync(str, salt, 1000, 64, 'sha512').toString('hex');
  }

  compare(str: string, hash: string): boolean {
    const hashedStr = this.hash(str);

    return hashedStr === hash;
  }
}
