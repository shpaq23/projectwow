import { Injectable } from '@angular/core';
import { CharacterService } from '../../services/api/character.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import {
  CharacterActionsTypes,
  GetCharacter,
  GetCharacterFail,
  GetCharacterSuccess,
  GetNewCharacterSuccess
} from '../actions/character.action';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CharacterResponse } from '../../services/api/structure-responses/character.response';

@Injectable()
export class CharacterEffect {
  constructor(private characterService: CharacterService,
              private actions$: Actions,
              private router: Router) { }

  @Effect()
  getCharacter: Observable<Action> = this.actions$.pipe(
    ofType(CharacterActionsTypes.GetCharacter, CharacterActionsTypes.GetNewCharacter),
    mergeMap(() => this.characterService.getCharacter().pipe(
      map(characterResponse => {
        if (this.isCharacterResponse(characterResponse)) {
          // this.router.navigate(['/game/character']);
          return new GetCharacterSuccess(this.characterService.createCharacterFromResponse(characterResponse));
        }
        if (this.isNewCharacterResponse(characterResponse)) {
          this.router.navigate(['/game/new']);
          return new GetNewCharacterSuccess(characterResponse);
        }
      }),
      catchError(err => of(new GetCharacterFail(err)))
    )));

  private isCharacterResponse(characterResponse: any): characterResponse is CharacterResponse {
    return typeof characterResponse !== 'boolean';
  }

  private isNewCharacterResponse(characterResponse: any): characterResponse is boolean {
    return typeof characterResponse === 'boolean';
  }

}
