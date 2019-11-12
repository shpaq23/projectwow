import { Injectable } from '@angular/core';
import { Character, CharacterService, NewCharacterRace } from '../../services/api/character.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { CharacterActionsTypes, GetCharacter, GetCharacterFail, GetCharacterSuccess } from '../actions/character.action';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class CharacterEffect {
  constructor(private characterService: CharacterService,
              private actions$: Actions,
              private router: Router) { }

  @Effect()
  getCharacter: Observable<Action> = this.actions$.pipe(
    ofType(CharacterActionsTypes.GetCharacter),
    map((action: GetCharacter) => action.forNewCharacter), // TODO: REMOVE 'forNewCharacter' parameter from payload
    mergeMap((forNewCharacter) => this.characterService.getCharacter().pipe(
      map(character => {
        if (this.isCharacterResponse(character)) {
          this.router.navigate(['/character']);
          console.log('characterResponseEffect');
          return new GetCharacterSuccess(character);
        }
        if (this.isNewCharacterResponse(character)) {
          this.router.navigate(['/character/new']);
          console.log('newCharacterResponseEffect: ', character);
          console.log('TODO STORE FOR NEW CHARACTER');
          return new GetCharacterSuccess(null);
        }
      }),
      catchError(err => of(new GetCharacterFail(err)))
    )));

  private isCharacterResponse(character: any): character is Character {
    return 'nickname' in character;
  }

  private isNewCharacterResponse(character: any): character is NewCharacterRace[] {
    return Array.isArray(character) && 'race' in character[0];
  }
}
