import { Dir, LyTheme2 } from '@alyle/ui';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { filter, map, Observable, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DirectionService {
  private readonly storageKey: string = 'layout';
  private readonly itemKey: string = 'direction';

  constructor(
    private readonly theme: LyTheme2,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {}

  get currentDirection(): Dir {
    return this.theme.variables.direction;
  }

  initDirection(): Observable<Dir> {
    return of(localStorage.getItem(this.storageKey)).pipe(
      filter(Boolean),
      map(str => JSON.parse(str)),
      map(json => json[this.itemKey]),
      filter((storageDir: Dir) => this.currentDirection !== storageDir),
      tap(() => this.toggleDirection()),
    );
  }

  toggleDirection() {
    const newDirection = this.currentDirection === Dir.ltr ? Dir.rtl : Dir.ltr;

    this.toggleOnDocument(newDirection);
    this.theme.toggleDirection();
  }

  private toggleOnDocument(direction: Dir) {
    this.document.dir = direction;
  }
}
