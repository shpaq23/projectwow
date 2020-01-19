import { Character } from '../../services/api/character.service';

export interface CharacterState {
  character: Character;
  newCharacter: boolean;
  error: string;
  loaded: boolean;
}

export const initCharacterState: CharacterState = {
  character: null,
  newCharacter: false,
  error: '',
  loaded: false
};
