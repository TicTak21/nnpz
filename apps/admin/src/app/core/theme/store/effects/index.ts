import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { tap } from 'rxjs';
import { ThemeService } from '../../services/theme.service';
import * as themeActions from '../actions';

@Injectable()
export class ThemeEffects implements OnInitEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly themeService: ThemeService,
  ) {}

  initTheme$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(themeActions.initTheme),
        tap(() => this.themeService.setInitialTheme()),
      ),
    { dispatch: false },
  );

  toggleTheme$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(themeActions.toggleTheme),
        tap(action =>
          this.themeService.toggleTheme(action.payload.currentTheme),
        ),
      ),
    { dispatch: false },
  );

  ngrxOnInitEffects(): Action {
    return { type: themeActions.initTheme.type };
  }
}
