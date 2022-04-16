import { Dir, LyTheme2 } from '@alyle/ui';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { TStorageItem } from '@nnpz/shared/types';
import { filter, map, Observable, of, tap, withLatestFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DirectionService {
  private readonly storageKey: string = 'layout';
  private readonly itemKey: string = 'direction';

  constructor(
    private readonly theme: LyTheme2,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {}

  get currentDirection(): Observable<Dir> {
    return of(this.theme.variables.direction as Dir);
  }

  get storageDir(): Observable<Dir> {
    return of(localStorage.getItem(this.storageKey)).pipe(
      filter(Boolean),
      map<string, TStorageItem<Dir>>(str => JSON.parse(str)),
      map(json => json[this.itemKey]),
    );
  }

  initDirection(): Observable<[Dir, Dir]> {
    return this.storageDir.pipe(
      withLatestFrom(this.currentDirection),
      tap(([storageDir, currentDir]) => {
        if (storageDir !== currentDir) this.theme.setDirection(storageDir);
      }),
    );
  }

  toggleDirection(): Observable<void> {
    return this.currentDirection.pipe(
      map(currentDir => (currentDir === Dir.ltr ? Dir.rtl : Dir.ltr)),
      map(newDir => {
        this.setOnDocument(newDir);
        this.theme.setDirection(newDir);
      }),
    );
  }

  private setOnDocument(direction: Dir) {
    this.document.dir = direction;
  }
}
