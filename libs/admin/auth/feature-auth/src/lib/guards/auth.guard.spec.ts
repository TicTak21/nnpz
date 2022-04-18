import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { fromAuth } from '@nnpz/admin/data-access-auth';
import { cold } from 'jest-marbles';
import { AuthGuard } from './auth.guard';

describe('Auth Guard', () => {
  let guard: AuthGuard;
  let store: MockStore;

  const initialState = { isLogged: false };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard, provideMockStore({ initialState })],
    });

    store = TestBed.inject(MockStore);
    guard = TestBed.inject(AuthGuard);
  });

  it('should create', () => {
    expect(guard).toBeTruthy();
  });

  it('should return false if the user is not logged in', () => {
    const target = false;
    const expected = cold('(--a)', { a: target });

    store.overrideSelector(fromAuth.selectIsLogged, target);

    expect(guard.canActivate()).toBeObservable(expected);
  });

  it('should return true if the user is logged in', () => {
    const target = true;
    const expected = cold('(--a)', { a: target });

    store.setState({ isLogged: target });
    store.overrideSelector(fromAuth.selectIsLogged, target);

    expect(guard.canActivate()).toBeObservable(expected);
  });
});
