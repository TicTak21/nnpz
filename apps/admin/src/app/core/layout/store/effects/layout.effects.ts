import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { switchMap } from 'rxjs';
import { DirectionService } from '../../services/direction.service';
import * as layoutActions from '../actions/layout.actions';

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
        switchMap(() => this.directionService.initDirection()),
      ),
    { dispatch: false },
  );

  toggleDirection$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(layoutActions.toggleDirection),
        switchMap(() => this.directionService.toggleDirection()),
      ),
    { dispatch: false },
  );

  ngrxOnInitEffects(): Action {
    return { type: layoutActions.initDirection.type };
  }
}
