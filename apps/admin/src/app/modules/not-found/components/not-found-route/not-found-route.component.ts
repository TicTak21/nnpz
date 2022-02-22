import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'admin-not-found-route',
  templateUrl: './not-found-route.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundRouteComponent {
  @Input() url$: Observable<string> = new Observable<string>();
}
