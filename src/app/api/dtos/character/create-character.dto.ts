import { CharacterLook } from 'src/app/pw/infrastructure/character/character-look';

export interface CreateCharacterDto {
  nickname: string;
  look: CharacterLook
}
