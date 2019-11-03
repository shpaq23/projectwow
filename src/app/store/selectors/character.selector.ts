import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CharacterState } from '../state/character.state';

const getCharacterFeatureState = createFeatureSelector<CharacterState>('character');

export const getCharacter = createSelector(
  getCharacterFeatureState,
  state => state.character
);
export const getCharacterError = createSelector(
  getCharacterFeatureState,
  state => state.error
);

