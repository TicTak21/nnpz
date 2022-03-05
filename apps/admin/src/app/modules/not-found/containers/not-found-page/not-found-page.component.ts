import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUrl } from '@nnpz/admin/app/core/store/reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'admin-not-found-page',
  templateUrl: './not-found-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPageComponent {
  url$: Observable<string> = new Observable<string>();

  constructor(private readonly store: Store) {
    this.url$ = store.select(selectUrl);
  }
}
