import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { CanActivateCharacterGuard } from 'src/app/api/guards/character/can-activate-character.guard';
import { CharacterCommands } from 'src/app/store/commands/character.commands';
import { CharacterRepository } from 'src/app/store/repositories/character.repository';
import { CharacterState } from 'src/app/store/state/character.state';

@Injectable({
  providedIn: 'root'
})
export class CharacterGuard extends CanActivateCharacterGuard {

  constructor(characterCommandsService: CharacterCommands,
              characterRepository: CharacterRepository,
              router: Router,
              actions$: Actions) {
    super(characterCommandsService, characterRepository, router, actions$);
  }

  resolveCanActivate(isNewCharacter: boolean): boolean | UrlTree {
    return isNewCharacter === false ? true : this.router.parseUrl('/new-character');
  }

}
