import { LPCHead } from 'src/app/LPC/types/LPC-types.type';
import { CharacterItem } from 'src/app/pw/infrastructure/character/items/CharacterItem';

export class CharacterItemHead extends CharacterItem {
  constructor(public readonly name: string,
              public readonly look: LPCHead) {
    super();
  }
}
