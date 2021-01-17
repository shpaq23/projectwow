import { Character } from 'src/app/pw/infrastructure/character/Character';

export interface CharacterState {
  character: Character;
  isNewCharacter: boolean;
  error: { message: string };
}

export const initCharacterState: CharacterState = {
  character: null,
  isNewCharacter: null,
  error: null
};
