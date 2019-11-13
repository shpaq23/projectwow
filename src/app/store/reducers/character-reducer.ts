import { CharacterState, initCharacterState } from '../state/character.state';
import { CharacterActions, CharacterActionsTypes } from '../actions/character.action';

export function characterReducer(state = initCharacterState, action: CharacterActions): CharacterState {
  switch (action.type) {
    case CharacterActionsTypes.GetCharacterSuccess:
      return {
        ... state,
        character: action.payload,
        loaded: true,
        error: ''
      };
    case CharacterActionsTypes.GetCharacterFail:
      return {
        ... state,
        error: action.payload
      };
    case CharacterActionsTypes.GetNewCharacterSuccess:
      return {
        ... state,
        newCharacter: action.payload,
        loaded: true,
        error: ''
      };
    default:
      return state;
  }
}
