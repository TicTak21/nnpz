import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'admin-locations-page',
  templateUrl: './locations-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationsPageComponent {}
