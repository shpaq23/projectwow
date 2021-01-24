import { LPCBoots } from 'src/app/LPC/types/LPC-types.type';
import { CharacterItem } from 'src/app/pw/infrastructure/character/items/CharacterItem';

export class CharacterItemBoots extends CharacterItem {
  constructor(public readonly name: string,
              public readonly look: LPCBoots) {
    super();
  }
}
