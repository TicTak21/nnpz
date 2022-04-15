import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromRouter } from '@nnpz/admin/data-access-router';
import { Observable } from 'rxjs';

@Component({
  selector: 'admin-feature-not-found-page',
  templateUrl: './not-found-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminFeauterNotFoundPageComponent {
  url$: Observable<string> = new Observable<string>();

  constructor(private readonly store: Store) {
    this.url$ = this.store.select(fromRouter.selectUrl);
  }
}
