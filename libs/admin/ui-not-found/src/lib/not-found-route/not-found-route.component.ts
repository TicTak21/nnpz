import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'admin-ui-not-found-route',
  templateUrl: './not-found-route.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminUiNotFoundRouteComponent {
  @Input() url$: Observable<string> = new Observable<string>();
}
