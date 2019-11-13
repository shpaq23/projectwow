import { CharacterActionsTypes } from '../actions/character.action';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { StartLoading, StopLoading } from '../actions/global-loader.action';

const startLoaderActions = [
  CharacterActionsTypes.GetCharacter,
  CharacterActionsTypes.GetNewCharacter
];
const stopLoaderActions = [
  CharacterActionsTypes.GetCharacterFail,
  CharacterActionsTypes.GetCharacterSuccess,
  CharacterActionsTypes.GetNewCharacterSuccess
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
