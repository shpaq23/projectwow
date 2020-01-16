import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {map, take} from 'rxjs/operators';
import {CharacterState} from '../store/state/character.state';
import {getCharacter, getCharacterLoaded} from '../store/selectors/character.selector';

@Injectable({
  providedIn: 'root'
})
export class NoCharacterGuard implements CanActivate {

  private characterLoaded: boolean;

  constructor(private characterStore: Store<CharacterState>,
              private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.characterStore.select(getCharacterLoaded).pipe(take(1)).subscribe(loaded => this.characterLoaded = loaded);

    return this.characterStore.select(getCharacter).pipe(
      map(character => {
        if (!character && this.characterLoaded) {
          return true;
        } else {
          this.router.navigate(['/game/character']);
          return false;
        }
      }));
  }
}
