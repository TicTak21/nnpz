import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRouter from '../../../../core/router/store';

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
