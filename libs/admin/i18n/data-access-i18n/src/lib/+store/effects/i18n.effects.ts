import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import * as i18nActions from '../actions/i18n.actions';

@Injectable()
export class I18nEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly translocoService: TranslocoService,
  ) {}

  redirectOnLogout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(i18nActions.setLang),
        tap(({ payload }) =>
          this.translocoService.setActiveLang(payload.newLang),
        ),
      ),
    { dispatch: false },
  );
}
