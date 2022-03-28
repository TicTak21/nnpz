import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { filter, merge, Observable, of, tap } from 'rxjs';

type TCanActivate =
  | boolean
  | UrlTree
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>;

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private readonly router: Router) {}

  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot,
  ): TCanActivate {
    const store$ = of(true);

    const isLogged$ = store$.pipe(filter(isLogged => isLogged));
    const notLogged$ = store$.pipe(
      filter(isLogged => !isLogged),
      tap(() => this.router.navigate(['/login'])),
    );

    return merge(isLogged$, notLogged$);
  }
}
