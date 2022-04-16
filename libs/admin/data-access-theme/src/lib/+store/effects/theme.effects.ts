import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { DirectionService } from '@nnpz/admin/data-access-layout';
import { switchMap } from 'rxjs';
import { ThemeService } from '../../services/theme.service';
import * as themeActions from '../actions/theme.actions';

@Injectable()
export class ThemeEffects implements OnInitEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly themeService: ThemeService,
    private readonly directionService: DirectionService,
  ) {}

  initTheme$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(themeActions.initTheme),
        switchMap(() => this.themeService.initTheme()),
      ),
    { dispatch: false },
  );

  toggleTheme$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(themeActions.toggleTheme),
        switchMap(() => this.themeService.toggleTheme()),
        switchMap(() => this.directionService.initDirection()),
      ),
    { dispatch: false },
  );

  ngrxOnInitEffects(): Action {
    return { type: themeActions.initTheme.type };
  }
}
