import { Action, createReducer, on } from '@ngrx/store';
import {
  createCharacterFailure,
  createCharacterSuccess,
  getCharacterFailure,
  getCharacterSuccess,
  setNewCharacter
} from 'src/app/store/actions/character.action';
import { CharacterState, initCharacterState } from 'src/app/store/state/character.state';

export const characterFeatureKey = 'character';

const reducer = createReducer(
  initCharacterState,
  on(getCharacterSuccess,
    createCharacterSuccess,
    (state, { payload }) => ({
      ...state,
      // isNewCharacter: true, // only for testing purpose, it should be remove and set only from setNewCharacterAction
      character: payload,
      error: null
    })),
  on(getCharacterFailure,
    createCharacterFailure,
    (state, { payload }) => ({
      ...state,
      error: payload
    })),
  on(setNewCharacter,
    (state, { payload }) => ({
      ...state,
      isNewCharacter: payload
    }))
);

export function characterReducer(state: CharacterState, action: Action): CharacterState {
  return reducer(state, action);
}
