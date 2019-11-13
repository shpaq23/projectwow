import { Character, NewCharacterRace } from '../../services/api/character.service';

export interface CharacterState {
  character: Character;
  newCharacter: NewCharacterRace[];
  error: string;
  loaded: boolean;
}

export const initCharacterState: CharacterState = {
  character: null,
  newCharacter: null,
  error: '',
  loaded: false
};
