import { LyTheme2 } from '@alyle/ui';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EThemes } from '@nnpz/ui';
import { tap } from 'rxjs';
import { DirectionService } from '../../services/direction.service';
import * as themeActions from '../actions';

@Injectable()
export class ThemeEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly theme: LyTheme2,
    private readonly directionService: DirectionService,
  ) {}

  toggleDirection$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(themeActions.toggleDirection),
        tap(action =>
          this.directionService.toggleDirection(
            action.payload.currentDirection,
          ),
        ),
      ),
    { dispatch: false },
  );

  toggleTheme$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(themeActions.toggleTheme),
        tap(action => {
          const { currentTheme } = action.payload;
          const nextTheme =
            currentTheme === EThemes.dark ? EThemes.light : EThemes.dark;

          this.theme.setTheme(nextTheme);
        }),
      ),
    { dispatch: false },
  );
}
