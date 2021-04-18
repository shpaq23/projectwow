import { FailureDto } from 'src/app/api/dtos/failure.dto';
import { Character } from 'src/app/pw/infrastructure/character/Character';

export interface CharacterState {
  character: Character;
  isNewCharacter: boolean;
  error: FailureDto;
}

export const initCharacterState: CharacterState = {
  character: null,
  isNewCharacter: false,
  error: null
};
