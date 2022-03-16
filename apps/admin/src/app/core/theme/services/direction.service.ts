import { Dir, LyTheme2 } from '@alyle/ui';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DirectionService {
  constructor(
    private readonly theme: LyTheme2,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {}

  toggleDirection(currenDirection: Dir) {
    const newDirection = currenDirection === Dir.ltr ? Dir.rtl : Dir.ltr;

    this.toggleOnDocument(newDirection);
    this.theme.toggleDirection();
  }

  private toggleOnDocument(direction: Dir) {
    this.document.dir = direction;
  }
}
