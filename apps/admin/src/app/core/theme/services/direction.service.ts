import { Dir, LyTheme2 } from '@alyle/ui';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DirectionService {
  public currentDirection = Dir.rtl;

  constructor(private readonly theme: LyTheme2) {}

  toggleDirection() {
    this.theme.toggleDirection();

    this.currentDirection === Dir.ltr
      ? (this.currentDirection = Dir.rtl)
      : (this.currentDirection = Dir.ltr);
  }
}
