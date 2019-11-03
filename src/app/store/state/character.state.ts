import { Character } from '../../services/api/character.service';

export interface CharacterState {
  character: Character;
  error: string;
}

export const initCharacterState: CharacterState = {
  character: null,
  error: ''
};
