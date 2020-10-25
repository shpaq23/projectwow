import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { CanActivateCharacterGuard } from 'src/app/api/guards/character/can-activate-character.guard';
import { CharacterState } from 'src/app/store/state/character.state';

@Injectable({
  providedIn: 'root'
})
export class NewCharacterGuard extends CanActivateCharacterGuard {

  constructor(characterStore: Store<CharacterState>,
              router: Router,
              actions$: Actions) {
    super(characterStore, router, actions$)
  }

  resolveCanActivate(isNewCharacter: boolean): boolean | UrlTree {
    return isNewCharacter === true ? true : this.router.parseUrl('/game');
  }
}
