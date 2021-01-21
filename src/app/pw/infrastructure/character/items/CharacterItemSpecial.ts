import { LPCSpecial } from 'src/app/LPC/types/LPC-types.type';
import { CharacterItem } from 'src/app/pw/infrastructure/character/items/CharacterItem';

export class CharacterItemSpecial extends CharacterItem {
  constructor(public readonly name: string,
              public readonly look: LPCSpecial) {
    super();
  }
}
