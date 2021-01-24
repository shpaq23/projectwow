import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { getLoggedUser } from 'src/app/store/selectors/user.selector';
import { UserState } from 'src/app/store/state/user.state';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userStore: Store<UserState>,
              private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.userStore.select(getLoggedUser).pipe(
      map(user => user ? true : this.router.parseUrl('/login')
      ));
  }
}
