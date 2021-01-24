import { LPCLegs } from 'src/app/LPC/types/LPC-types.type';
import { CharacterItem } from 'src/app/pw/infrastructure/character/items/CharacterItem';

export class CharacterItemLegs extends CharacterItem {
  constructor(public readonly name: string,
              public readonly look: LPCLegs) {
    super();
  }
}
