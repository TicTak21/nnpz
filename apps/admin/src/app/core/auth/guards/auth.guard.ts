import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, merge, Observable, tap } from 'rxjs';
import * as fromAuth from '../store';

type TCanActivate =
  | boolean
  | UrlTree
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>;

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private readonly router: Router, private readonly store: Store) {}

  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot,
  ): TCanActivate {
    const store$ = this.store.select(fromAuth.selectIsLogged);

    const isLogged$ = store$.pipe(filter(isLogged => isLogged));
    const notLogged$ = store$.pipe(
      filter(isLogged => !isLogged),
      tap(() => this.router.navigate(['/login'])),
    );

    return merge(isLogged$, notLogged$);
  }
}
