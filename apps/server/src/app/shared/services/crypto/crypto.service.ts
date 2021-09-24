import { Injectable } from '@nestjs/common';
import { Buffer } from 'buffer';
import {
  BinaryLike,
  randomBytes,
  scrypt as cryptoScript,
  ScryptOptions,
  timingSafeEqual,
} from 'crypto';
import { bindNodeCallback, map, Observable } from 'rxjs';

const scrypt: (
  password: BinaryLike,
  salt: BinaryLike,
  keylen: number,
  options?: ScryptOptions,
) => Observable<Buffer> = bindNodeCallback(cryptoScript);

@Injectable()
export class CryptoService {
  private readonly separator: string = ':';
  private readonly keylen: number = 64;
  private readonly encoding: BufferEncoding = 'hex';
  private readonly bytesLength: number = 8;

  hash(str: string): Observable<string> {
    const salt = randomBytes(this.bytesLength).toString(this.encoding);

    return scrypt(str, salt, this.keylen).pipe(
      map(
        derivedKey =>
          salt + this.separator + derivedKey.toString(this.encoding),
      ),
    );
  }

  compare(str: string, hash: string): Observable<boolean> {
    const [salt, key] = hash.split(this.separator);
    const keyBuffer = Buffer.from(key, this.encoding);

    return scrypt(str, salt, this.keylen).pipe(
      map(derivedKey => timingSafeEqual(keyBuffer, derivedKey)),
    );
  }
}
