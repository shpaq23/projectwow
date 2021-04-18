import { createAction, props } from '@ngrx/store';
import { CreateCharacterDto } from 'src/app/api/dtos/character/create-character.dto';
import { FailureDto } from 'src/app/api/dtos/failure.dto';
import { Character } from 'src/app/pw/infrastructure/character/Character';

export const setNewCharacter = createAction(
  '[Character] Set New Character',
  props<{ payload: boolean }>()
);

export const getCharacter = createAction(
  '[Character] Get Character'
);

export const getCharacterSuccess = createAction(
  '[Character] Get Character Success',
  props<{ payload: Character }>()
);

export const getCharacterFailure = createAction(
  '[Character] Get Character Failure',
  props<{ payload: FailureDto }>()
);

export const createCharacter = createAction(
  '[Character] Create Character',
  props<{ payload: CreateCharacterDto }>()
);

export const createCharacterSuccess = createAction(
  '[Character] Create Character Success',
  props<{ payload: Character }>()
);

export const createCharacterFailure = createAction(
  '[Character] Create Character Failure',
  props<{ payload: FailureDto }>()
);
