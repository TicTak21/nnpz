import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUrl } from '../../../../core/store/reducers';

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
