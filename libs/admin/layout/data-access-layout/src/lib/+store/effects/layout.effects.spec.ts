import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DirectionService } from '../../services/direction.service';
import { LayoutEffects } from './layout.effects';

describe('LayoutEffects', () => {
  let effects: LayoutEffects;
  const actions$ = new Observable<Action>();

  class MockDirectionService {}

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LayoutEffects,
        provideMockActions(() => actions$),
        { provide: DirectionService, useClass: MockDirectionService },
      ],
    });

    effects = TestBed.inject(LayoutEffects);
  });

  it('should create', () => {
    expect(effects).toBeTruthy();
  });
});
