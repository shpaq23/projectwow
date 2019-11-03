import { Character } from '../../services/api/character.service';

export interface CharacterState {
  character: Character;
  error: string;
  loaded: boolean;
}

export const initCharacterState: CharacterState = {
  character: null,
  error: '',
  loaded: false
};
