import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'admin-me-page',
  templateUrl: './me-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MePageComponent {}
