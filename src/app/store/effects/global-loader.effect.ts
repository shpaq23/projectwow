import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CharacterActionsTypes } from '../actions/character.action';
import { StartLoading, StopLoading } from '../actions/global-loader.action';

const startLoaderActions = [
  // CharacterActionsTypes.GetCharacter,
  CharacterActionsTypes.GetNewCharacter,
  CharacterActionsTypes.CreateCharacter
];
const stopLoaderActions = [
  CharacterActionsTypes.GetCharacterFail,
  CharacterActionsTypes.GetCharacterSuccess,
  CharacterActionsTypes.GetNewCharacterSuccess,
  CharacterActionsTypes.CreateCharacterSuccess,
  CharacterActionsTypes.CreateCharacterFail,
];

@Injectable()
export class GlobalLoaderEffect {
  constructor(private actions$: Actions) { }

  @Effect()
  startLoader: Observable<Action> = this.actions$.pipe(
    ofType(... startLoaderActions),
    map(() => new StartLoading()));

  @Effect()
  stopLoader: Observable<Action> = this.actions$.pipe(
    ofType(... stopLoaderActions),
    map(() => new StopLoading()));
}
