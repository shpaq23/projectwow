import { CharacterActions, CharacterActionsTypes } from 'src/app/store/actions/character.action';
import { CharacterState, initCharacterState } from 'src/app/store/state/character.state';

export function characterReducer(state = initCharacterState, action: CharacterActions): CharacterState {
  switch (action.type) {
    case CharacterActionsTypes.GetCharacterSuccess:
      return {
        ...state,
        error: ''
      };
    case CharacterActionsTypes.GetCharacterFail:
      return {
        ...state,
        error: action.payload.message
      };
    case CharacterActionsTypes.GetNewCharacterSuccess:
      return {
        ...state,
        newCharacter: action.payload,
        error: ''
      };
    case CharacterActionsTypes.GetNewCharacterFail:
      return {
        ...state,
        error: action.payload.message
      };
    case CharacterActionsTypes.UpdateCharacter:
      return {
        ...state,
        newCharacter: false,
        character: action.payload
      };
    case CharacterActionsTypes.CreateCharacterSuccess:
      return {
        ...state,
        error: ''
      };
    case CharacterActionsTypes.CreateCharacterFail:
      return {
        ...state,
        error: action.payload.message
      };
    case CharacterActionsTypes.ClearErrorMessage:
      return {
        ...state,
        error: ''
      };
    default:
      return state;
  }
}
