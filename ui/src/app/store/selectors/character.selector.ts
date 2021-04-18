import { createFeatureSelector, createSelector } from '@ngrx/store';
import { characterFeatureKey } from 'src/app/store/reducers/character.reducer';
import { CharacterState } from 'src/app/store/state/character.state';

const getCharacterFeatureState = createFeatureSelector<CharacterState>(characterFeatureKey);

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
