import { Dir } from '@alyle/ui';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DirectionService } from '@nnpz/admin/app/core/theme/services/direction.service';

@Component({
  selector: 'admin-drawer-dir-btn',
  templateUrl: './drawer-dir-btn.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerDirBtnComponent {
  constructor(private readonly directionService: DirectionService) {}

  get isLtr(): boolean {
    return this.directionService.currentDirection === Dir.ltr;
  }

  toggleDirection() {
    this.directionService.toggleDirection();
  }
}
