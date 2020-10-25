import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { CharacterService } from 'src/app/api/character.service';
import {
  CharacterActionsTypes,
  CreateCharacter,
  CreateCharacterFail,
  CreateCharacterSuccess,
  GetCharacterFail,
  GetCharacterSuccess,
  GetNewCharacterFail,
  GetNewCharacterSuccess
} from 'src/app/store/actions/character.action';
import { CharacterState } from 'src/app/store/state/character.state';


@Injectable()
export class CharacterEffect {

  @Effect()
  getNewCharacter: Observable<Action> = this.actions$.pipe(
    ofType(CharacterActionsTypes.GetNewCharacter),
    mergeMap(() => this.characterService.isNewCharacter().pipe(
      map(isNewCharacter => new GetNewCharacterSuccess(isNewCharacter)),
      catchError(err => of(new GetNewCharacterFail(err)))
    ))
  );
  @Effect()
  getCharacter: Observable<Action> = this.actions$.pipe(
    ofType(CharacterActionsTypes.GetCharacter),
    mergeMap(() => this.characterService.getCharacter().pipe(
      map(response => new GetCharacterSuccess(response)),
      catchError(err => of(new GetCharacterFail(err)))
    )));
  @Effect()
  createCharacter: Observable<Action> = this.actions$.pipe(
    ofType(CharacterActionsTypes.CreateCharacter),
    map((action: CreateCharacter) => action.payload),
    mergeMap(payload => this.characterService.createNewCharacter(payload).pipe(
      map(response => new CreateCharacterSuccess(response)),
      catchError(err => of(new CreateCharacterFail(err)))
    )));
  @Effect({ dispatch: false })
  redirectAfterCharacterCreation$ = this.actions$.pipe(
    ofType(CharacterActionsTypes.CreateCharacterSuccess),
    tap(() => {
      console.log('wszedlem');
      this.router.navigate(['/game'])
    })
  );

  constructor(private characterService: CharacterService,
              private characterStore: Store<CharacterState>,
              private actions$: Actions,
              private router: Router) {
  }

}
