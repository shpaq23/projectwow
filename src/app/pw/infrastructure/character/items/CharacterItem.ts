import { CharacterItemLook } from 'src/app/pw/infrastructure/character/types/character-item-look.type';

export abstract class CharacterItem {
  public readonly name: string;
  public readonly look: CharacterItemLook;
}
