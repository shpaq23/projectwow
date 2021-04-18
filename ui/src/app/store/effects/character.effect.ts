import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { CharacterService } from 'src/app/api/character.service';
import { FailureDto } from 'src/app/api/dtos/failure.dto';
import {
  createCharacter,
  createCharacterFailure,
  createCharacterSuccess,
  getCharacter,
  getCharacterFailure,
  getCharacterSuccess
} from 'src/app/store/actions/character.action';
import { CharacterCommands } from 'src/app/store/commands/character.commands';


@Injectable()
export class CharacterEffect {

  getCharacter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCharacter),
      switchMap(() => this.characterService.getCharacter().pipe(
        map(response => getCharacterSuccess({ payload: response })),
        catchError((err: FailureDto) => {
          if (err.code === 422) {
            this.characterCommands.setNewCharacter(true);
          }
          return of(getCharacterFailure({ payload: err }));
        })
      )))
  );

  createCharacter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createCharacter),
      map(action => action.payload),
      switchMap(payload => this.characterService.createNewCharacter(payload).pipe(
        map(response => createCharacterSuccess({ payload: response })),
        catchError(err => of(createCharacterFailure({ payload: err })))
      )))
  );

  redirectAfterCharacterCreation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createCharacterSuccess),
      tap(() => {
        this.router.navigate(['/game']);
      })
    ), { dispatch: false });

  constructor(private readonly characterService: CharacterService,
              private readonly characterCommands: CharacterCommands,
              private readonly actions$: Actions,
              private readonly router: Router) {
  }

}
