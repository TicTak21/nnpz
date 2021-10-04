import { Injectable } from '@nestjs/common';
import { Buffer } from 'buffer';
import {
  BinaryLike,
  randomBytes,
  scrypt as cryptoScript,
  ScryptOptions,
  timingSafeEqual,
} from 'crypto';
import {
  bindNodeCallback,
  map,
  Observable,
  of,
  switchMap,
  withLatestFrom,
} from 'rxjs';

@Injectable()
export class CryptoService {
  private readonly separator: string = ':';
  private readonly keylen: number = 64;
  private readonly encoding: BufferEncoding = 'hex';
  private readonly bytesLength: number = 8;

  hash(str: string): Observable<string> {
    const salt$ = this.getSalt();

    return salt$.pipe(
      switchMap(salt => this.scrypt(str, salt, this.keylen)),
      withLatestFrom(salt$),
      switchMap(([key, salt]) => this.concatSaltAndKey(salt, key)),
    );
  }

  compare(str: string, hash: string): Observable<boolean> {
    const [salt, key] = hash.split(this.separator);
    const keyBuffer = Buffer.from(key, this.encoding);

    return this.scrypt(str, salt, this.keylen).pipe(
      map(key => timingSafeEqual(keyBuffer, key)),
    );
  }

  private getSalt(): Observable<string> {
    return of(randomBytes(this.bytesLength).toString(this.encoding));
  }

  private concatSaltAndKey(salt: string, key: Buffer): Observable<string> {
    return of(salt + this.separator + key.toString(this.encoding));
  }

  private scrypt: (
    password: BinaryLike,
    salt: BinaryLike,
    keylen: number,
    options?: ScryptOptions,
  ) => Observable<Buffer> = bindNodeCallback(cryptoScript);
}
