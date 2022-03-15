import { LyTheme2 } from '@alyle/ui';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import * as themeActions from '../actions';

@Injectable()
export class ThemeEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly theme: LyTheme2,
  ) {}

  toggleDirection$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(themeActions.toggleDirection),
        tap(() => this.theme.toggleDirection()),
      ),
    { dispatch: false },
  );
}
