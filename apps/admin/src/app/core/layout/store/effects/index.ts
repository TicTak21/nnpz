import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { DirectionService } from '../../services/direction.service';
import * as fromLayout from '../actions';

@Injectable()
export class LayoutEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly directionService: DirectionService,
  ) {}

  toggleDirection$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromLayout.toggleDirection),
        tap(action =>
          this.directionService.toggleDirection(
            action.payload.currentDirection,
          ),
        ),
      ),
    { dispatch: false },
  );
}
