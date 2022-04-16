import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DirectionService } from '../../../layout/services/direction.service';
import { ThemeService } from '../../services/theme.service';
import { ThemeEffects } from './theme.effects';

describe('ThemeEffects', () => {
  let effects: ThemeEffects;
  const actions$ = new Observable<Action>();

  class MockThemeService {}
  class MockDirectionService {}

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ThemeEffects,
        provideMockActions(() => actions$),
        {
          provide: ThemeService,
          useClass: MockThemeService,
        },
        {
          provide: DirectionService,
          useClass: MockDirectionService,
        },
      ],
    });

    effects = TestBed.inject(ThemeEffects);
  });

  it('should create', () => {
    expect(effects).toBeTruthy();
  });
});
