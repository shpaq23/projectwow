import { Injectable } from '@angular/core';
import { CharacterService } from '../../services/api/character.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import {
  CharacterActionsTypes, CreateNewCharacter, CreateNewCharacterFail, CreateNewCharacterSuccess,
  GetCharacter,
  GetCharacterFail,
  GetCharacterSuccess,
  GetNewCharacterSuccess
} from '../actions/character.action';
import { catchError, delay, map, mergeMap } from 'rxjs/operators';
import { CharacterResponse } from '../../services/api/structure-responses/character.response';
import { CharacterState } from '../state/character.state';

@Injectable()
export class CharacterEffect {
  constructor(private characterService: CharacterService,
              private characterStore: Store<CharacterState>,
              private actions$: Actions,
              private router: Router) { }

  @Effect()
  getCharacter: Observable<Action> = this.actions$.pipe(
    ofType(CharacterActionsTypes.GetCharacter),
    map((action: GetCharacter) => action.withRedirection),
    mergeMap((withRedirection) => this.characterService.getCharacter().pipe(
      map(characterResponse => {
        if (this.isCharacterResponse(characterResponse)) {
          if (withRedirection) {
            this.router.navigate(['/game/character']);
          }
          return new GetCharacterSuccess(this.characterService.createCharacterFromResponse(characterResponse));
        }
        if (this.isNewCharacterResponse(characterResponse)) {
          this.router.navigate(['/game/new']);
          return new GetNewCharacterSuccess(characterResponse);
        }
      }),
      catchError(err => of(new GetCharacterFail(err)))
    )));

  @Effect()
  createNewCharacter: Observable<Action> = this.actions$.pipe(
    ofType(CharacterActionsTypes.CreateNewCharacter),
    map((action: CreateNewCharacter) => action.payload),
    mergeMap((payload) => this.characterService.createNewCharacter(payload.nickname).pipe(
      map(response => {
        // TODO: REMOVE AFTER REAL RESTAPI
          this.characterService.afterNewCharacterCreate = true;
          this.characterStore.dispatch(new GetCharacter(true));
          return new CreateNewCharacterSuccess();
        }
      ),
      catchError(err => of(new CreateNewCharacterFail(err)))
    )));


  private isCharacterResponse(characterResponse: any): characterResponse is CharacterResponse {
    return typeof characterResponse !== 'boolean';
  }

  private isNewCharacterResponse(characterResponse: any): characterResponse is boolean {
    return typeof characterResponse === 'boolean';
  }

}
