import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'admin-me-delete',
  templateUrl: './me-delete.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeDeleteComponent {
  // constructor(public readonly dialog: LyDialog) {}
}
