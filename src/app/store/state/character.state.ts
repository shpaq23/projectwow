import { Character } from 'src/app/pw/infrastructure/character/Character';

export interface CharacterState {
  character: Character;
  newCharacter: boolean;
  error: { message: string };
}

export const initCharacterState: CharacterState = {
  character: null,
  newCharacter: null,
  error: null
};
