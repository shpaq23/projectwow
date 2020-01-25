import { Action } from '@ngrx/store';
import { Character } from '../../utils/character/Character';

export enum CharacterActionsTypes {
  GetCharacter = '[Character] Get Character',
  GetCharacterSuccess = '[Character] Get Character Success',
  GetCharacterFail = '[Character] Get Character Fail',

  GetNewCharacter = '[Character] Get New Character',
  GetNewCharacterSuccess = '[Character] Get New Character Success',

  UpdateCharacter = '[Character] Update Character',

  CreateNewCharacter = '[Character] Create New Character',
  CreateNewCharacterSuccess = '[Character] Create New Character Success',
  CreateNewCharacterFail = '[Character] Create New Character Fail',

  ClearErrorMessage = '[Character] Clear Error Message'
}

export class GetCharacter implements Action {
  public readonly type = CharacterActionsTypes.GetCharacter;
  constructor(public withRedirection: boolean = false) { }
}

export class GetCharacterSuccess implements Action {
  public readonly type = CharacterActionsTypes.GetCharacterSuccess;
  constructor(public payload: Character) { }
}

export class GetCharacterFail implements Action {
  public readonly type = CharacterActionsTypes.GetCharacterFail;
  constructor(public payload: string) { }
}

export class GetNewCharacter implements Action {
  public readonly type = CharacterActionsTypes.GetNewCharacter;
  constructor() { }
}

export class GetNewCharacterSuccess implements Action {
  public readonly type = CharacterActionsTypes.GetNewCharacterSuccess;
  constructor(public payload: boolean) { }
}

export class UpdateCharacter implements Action {
  public readonly type = CharacterActionsTypes.UpdateCharacter;
  constructor(public payload: Character) { }
}

export class CreateNewCharacter implements Action {
  public readonly type = CharacterActionsTypes.CreateNewCharacter;
  constructor(public payload: {nickname: string}) { }
}

export class CreateNewCharacterSuccess implements Action {
  public readonly type = CharacterActionsTypes.CreateNewCharacterSuccess;
  constructor() { }
}

export class CreateNewCharacterFail implements Action {
  public readonly type = CharacterActionsTypes.CreateNewCharacterFail;
  constructor(public payload: string) { }
}

export class ClearErrorMessage implements Action {
  public readonly type = CharacterActionsTypes.ClearErrorMessage;
  constructor() { }
}

export type CharacterActions = GetCharacter | GetCharacterSuccess | GetCharacterFail |
  GetNewCharacter | GetNewCharacterSuccess | UpdateCharacter | CreateNewCharacter |
  CreateNewCharacterSuccess | CreateNewCharacterFail | ClearErrorMessage;
