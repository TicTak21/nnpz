import { TestBed } from '@angular/core/testing';
import { TranslocoTestingModule } from '@ngneat/transloco';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { I18nEffects } from './i18n.effects';

describe('I18nEffects', () => {
  let effects: I18nEffects;
  const actions$ = new Observable<Action>();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslocoTestingModule],
      providers: [I18nEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(I18nEffects);
  });

  it('should create', () => {
    expect(effects).toBeTruthy();
  });
});
