import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import {CharacterState} from '../store/state/character.state';
import {getCharacter} from '../store/selectors/character.selector';

@Injectable({
  providedIn: 'root'
})
export class CharacterGuard implements CanActivate {

  constructor(private userStore: Store<CharacterState>,
              private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.userStore.select(getCharacter).pipe(
      map(character => {
        if (character) {
          return true;
        } else {
          this.router.navigate(['/game/new']);
          return false;
        }
      }));
  }
}
