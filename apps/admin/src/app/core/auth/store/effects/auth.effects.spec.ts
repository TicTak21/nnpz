import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import * as authActions from '../actions/auth.actions';
import { AuthEffects } from './auth.effects';

describe('AuthEffects', () => {
  let effects: AuthEffects;
  let router: Router;
  let actions$ = new Observable<Action>();

  @Component({
    template: '',
  })
  class LoginPageComponent {}

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'login', component: LoginPageComponent },
        ]),
      ],
      providers: [AuthEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(AuthEffects);
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(effects).toBeTruthy();
  });

  it('should navigate to the login page after logout', () => {
    actions$ = of({ type: authActions.logout.type });

    jest.spyOn(router, 'navigate');

    effects.redirectOnLogout$.subscribe();

    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });
});
