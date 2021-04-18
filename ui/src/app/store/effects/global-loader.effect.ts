import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { getCharacter, getCharacterFailure, getCharacterSuccess } from 'src/app/store/actions/character.action';
import { startLoader, stopLoader } from 'src/app/store/actions/global-loader.action';

const startLoaderActions = [
  getCharacter,
  // createCharacter
];
const stopLoaderActions = [
  getCharacterFailure,
  getCharacterSuccess
  // createCharacterSuccess,
  // createCharacterFailure
];

@Injectable()
export class GlobalLoaderEffect {

  startLoader$ = createEffect(() =>
    this.actions$.pipe(
      ofType(...startLoaderActions),
      map(() => startLoader()))
  );


  stopLoader$ = createEffect(() =>
    this.actions$.pipe(
      ofType(...stopLoaderActions),
      map(() => stopLoader()))
  );


  constructor(private readonly actions$: Actions) {
  }
}
