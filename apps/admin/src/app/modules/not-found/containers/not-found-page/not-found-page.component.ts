import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRouter from '@nnpz/admin/app/core/router/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'admin-not-found-page',
  templateUrl: './not-found-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPageComponent {
  url$: Observable<string> = new Observable<string>();

  constructor(private readonly store: Store) {
    this.url$ = store.select(fromRouter.selectUrl);
  }
}
