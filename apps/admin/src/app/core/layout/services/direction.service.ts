import { Dir, LyTheme2 } from '@alyle/ui';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

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

  initDirection() {
    const localStorageDirection = localStorage.getItem(this.storageKey);

    if (!localStorageDirection) return;

    const parsedLocalStorageDirection = JSON.parse(localStorageDirection);
    const localStorageDir: Dir = parsedLocalStorageDirection[this.itemKey];

    if (this.currentDirection !== localStorageDir) this.toggleDirection();
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
