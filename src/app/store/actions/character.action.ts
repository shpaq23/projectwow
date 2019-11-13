import { Action } from '@ngrx/store';
import { Character, NewCharacterRace } from '../../services/api/character.service';

export enum CharacterActionsTypes {
  GetCharacter = '[Character] Get Character',
  GetCharacterSuccess = '[Character] Get Character Success',
  GetCharacterFail = '[Character] Get Character Fail',

  GetNewCharacter = '[Character] Get New Character',
  GetNewCharacterSuccess = '[Character] Get New Character Success',
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
  constructor(public payload: string) { }
}

export class GetNewCharacter implements Action {
  public readonly type = CharacterActionsTypes.GetNewCharacter;
  constructor() { }
}

export class GetNewCharacterSuccess implements Action {
  public readonly type = CharacterActionsTypes.GetNewCharacterSuccess;
  constructor(public payload: NewCharacterRace[]) { }
}

export type CharacterActions = GetCharacter | GetCharacterSuccess | GetCharacterFail |
  GetNewCharacter | GetNewCharacterSuccess;
