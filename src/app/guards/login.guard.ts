import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { UserState } from '../store/state/user.state';
import { getLoggedUser } from '../store/selectors/user.selector';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private userStore: Store<UserState>,
              private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.userStore.select(getLoggedUser).pipe(
      map(user => {
        if (user) {
          this.router.navigate(['/character']);
          return false;
        } else {
          return true;
        }
      }));
  }
}
