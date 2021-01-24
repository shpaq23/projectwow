import { CharacterActions, CharacterActionsTypes } from 'src/app/store/actions/character.action';
import { CharacterState, initCharacterState } from 'src/app/store/state/character.state';

export function characterReducer(state = initCharacterState, action: CharacterActions): CharacterState {
  switch (action.type) {
    case CharacterActionsTypes.GetCharacterSuccess:
      return {
        ...state,
        isNewCharacter: false,
        character: action.payload,
        error: { message: '' }
      };
    case CharacterActionsTypes.GetCharacterFail:
      return {
        ...state,
        error: { message: action.payload.message }
      };

    case CharacterActionsTypes.SetIsNewCharacter:
      return {
        ...state,
        isNewCharacter: action.payload
      };

    case CharacterActionsTypes.UpdateCharacter:
      return {
        ...state,
        isNewCharacter: false,
        character: action.payload
      };
    case CharacterActionsTypes.CreateCharacterSuccess:
      return {
        ...state,
        error: { message: '' }
      };
    case CharacterActionsTypes.CreateCharacterFail:
      return {
        ...state,
        error: { message: action.payload.message }
      };
    case CharacterActionsTypes.ClearErrorMessage:
      return {
        ...state,
        error: { message: '' }
      };
    default:
      return state;
  }
}
