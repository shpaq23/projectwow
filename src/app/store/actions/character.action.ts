import { Action } from '@ngrx/store';
import { CreateCharacterDto } from 'src/app/api/dtos/character/create-character.dto';
import { FailureDto } from 'src/app/api/dtos/failure.dto';
import { Character } from 'src/app/pw/infrastructure/character/Character';

export enum CharacterActionsTypes {
  GetCharacter = '[Character] Get Character',
  GetCharacterSuccess = '[Character] Get Character Success',
  GetCharacterFail = '[Character] Get Character Fail',

  GetNewCharacter = '[Character] Get New Character',
  GetNewCharacterSuccess = '[Character] Get New Character Success',
  GetNewCharacterFail = '[Character] Get New Character Fail',

  UpdateCharacter = '[Character] Update Character',

  CreateCharacter = '[Character] Create Character',
  CreateCharacterSuccess = '[Character] Create Character Success',
  CreateCharacterFail = '[Character] Create Character Fail',

  ClearErrorMessage = '[Character] Clear Error Message'
}

export class GetCharacter implements Action {
  public readonly type = CharacterActionsTypes.GetCharacter;
  constructor() { }
}

export class GetCharacterSuccess implements Action {
  public readonly type = CharacterActionsTypes.GetCharacterSuccess;
  constructor(public payload: Character) { }
}

export class GetCharacterFail implements Action {
  public readonly type = CharacterActionsTypes.GetCharacterFail;
  constructor(public payload: FailureDto) { }
}

export class GetNewCharacter implements Action {
  public readonly type = CharacterActionsTypes.GetNewCharacter;
  constructor() { }
}

export class GetNewCharacterSuccess implements Action {
  public readonly type = CharacterActionsTypes.GetNewCharacterSuccess;
  constructor(public payload: boolean) { }
}

export class GetNewCharacterFail implements Action {
  public readonly type = CharacterActionsTypes.GetNewCharacterFail;
  constructor(public payload: FailureDto) { }
}

export class UpdateCharacter implements Action {
  public readonly type = CharacterActionsTypes.UpdateCharacter;
  constructor(public payload: Character) { }
}

export class CreateCharacter implements Action {
  public readonly type = CharacterActionsTypes.CreateCharacter;
  constructor(public payload: CreateCharacterDto) { }
}

export class CreateCharacterSuccess implements Action {
  public readonly type = CharacterActionsTypes.CreateCharacterSuccess;
  constructor(public payload: Character) { }
}

export class CreateCharacterFail implements Action {
  public readonly type = CharacterActionsTypes.CreateCharacterFail;
  constructor(public payload: FailureDto) { }
}

export class ClearErrorMessage implements Action {
  public readonly type = CharacterActionsTypes.ClearErrorMessage;
  constructor() { }
}

export type CharacterActions = GetCharacter | GetCharacterSuccess | GetCharacterFail |
  GetNewCharacter | GetNewCharacterSuccess | GetNewCharacterFail | UpdateCharacter | CreateCharacter |
  CreateCharacterSuccess | CreateCharacterFail | ClearErrorMessage;
