import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { CharacterService } from 'src/app/api/character.service';
import { FailureDto } from 'src/app/api/dtos/failure.dto';
import {
  CharacterActionsTypes,
  CreateCharacter,
  CreateCharacterFail,
  CreateCharacterSuccess,
  GetCharacterFail,
  GetCharacterSuccess,
  SetIsNewCharacter
} from 'src/app/store/actions/character.action';
import { CharacterState } from 'src/app/store/state/character.state';


@Injectable()
export class CharacterEffect {

  @Effect()
  getCharacter: Observable<Action> = this.actions$.pipe(
    ofType(CharacterActionsTypes.GetCharacter),
    mergeMap(() => this.characterService.getCharacter().pipe(
      map(response => new GetCharacterSuccess(response)),
      catchError((err: FailureDto) => {
        if (err.code === 422) {
          this.characterStore.dispatch(new SetIsNewCharacter(true));
        }
        return of(new GetCharacterFail(err));
      })
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
      this.router.navigate(['/game']);
    })
  );

  constructor(private characterService: CharacterService,
              private characterStore: Store<CharacterState>,
              private actions$: Actions,
              private router: Router) {
  }

}
