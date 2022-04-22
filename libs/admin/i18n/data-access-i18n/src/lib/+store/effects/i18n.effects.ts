import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { switchMap, tap } from 'rxjs';
import { I18nService } from '../../services/i18n.service';
import * as i18nActions from '../actions/i18n.actions';

@Injectable()
export class I18nEffects implements OnInitEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly translocoService: TranslocoService,
    private readonly i18nService: I18nService,
  ) {}

  initTheme$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(i18nActions.initLang),
        switchMap(() => this.i18nService.initLang()),
      ),
    { dispatch: false },
  );

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

  ngrxOnInitEffects(): Action {
    return { type: i18nActions.initLang.type };
  }
}
