import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { fromAuth } from '@nnpz/admin/data-access-auth';
import { iif, mergeMap, Observable, of } from 'rxjs';

type TCanActivate =
  | boolean
  | UrlTree
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>;

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private readonly store: Store) {}

  canActivate(
    _route?: ActivatedRouteSnapshot,
    _state?: RouterStateSnapshot,
  ): TCanActivate {
    const store$ = this.store.select(fromAuth.selectIsLogged);

    return store$.pipe(
      mergeMap(isLogged => iif(() => isLogged, of(true), of(false))),
    );
  }
}
