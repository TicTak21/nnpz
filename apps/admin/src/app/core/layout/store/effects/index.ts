import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { tap } from 'rxjs';
import { DirectionService } from '../../services/direction.service';
import * as layoutActions from '../actions';

@Injectable()
export class LayoutEffects implements OnInitEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly directionService: DirectionService,
  ) {}

  initDirection$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(layoutActions.initDirection),
        tap(() => this.directionService.initDirection()),
      ),
    { dispatch: false },
  );

  toggleDirection$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(layoutActions.toggleDirection),
        tap(() => this.directionService.toggleDirection()),
      ),
    { dispatch: false },
  );

  ngrxOnInitEffects(): Action {
    return { type: layoutActions.initDirection.type };
  }
}
