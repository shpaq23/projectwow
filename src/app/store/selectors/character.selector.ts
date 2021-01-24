import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CharacterState } from 'src/app/store/state/character.state';

const getCharacterFeatureState = createFeatureSelector<CharacterState>('character');

export const getCharacter = createSelector(
  getCharacterFeatureState,
  state => state.character
);

export const getCharacterError = createSelector(
  getCharacterFeatureState,
  state => state.error
);

export const getIsNewCharacter = createSelector(
  getCharacterFeatureState,
  state => state.isNewCharacter
);
