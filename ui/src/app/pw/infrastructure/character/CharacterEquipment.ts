import { CharacterItemBelt } from 'src/app/pw/infrastructure/character/items/CharacterItemBelt';
import { CharacterItemBoots } from 'src/app/pw/infrastructure/character/items/CharacterItemBoots';
import { CharacterItemChest } from 'src/app/pw/infrastructure/character/items/CharacterItemChest';
import { CharacterItemHands } from 'src/app/pw/infrastructure/character/items/CharacterItemHands';
import { CharacterItemHead } from 'src/app/pw/infrastructure/character/items/CharacterItemHead';
import { CharacterItemLegs } from 'src/app/pw/infrastructure/character/items/CharacterItemLegs';
import { CharacterItemShoulders } from 'src/app/pw/infrastructure/character/items/CharacterItemShoulders';
import { CharacterItemSpecial } from 'src/app/pw/infrastructure/character/items/CharacterItemSpecial';
import { CharacterItemWeapon } from 'src/app/pw/infrastructure/character/items/CharacterItemWeapon';

export class CharacterEquipment {
  constructor(public readonly boots?: CharacterItemBoots,
              public readonly legs?: CharacterItemLegs,
              public readonly belt?: CharacterItemBelt,
              public readonly chest?: CharacterItemChest,
              public readonly head?: CharacterItemHead,
              public readonly shoulders?: CharacterItemShoulders,
              public readonly hands?: CharacterItemHands,
              public readonly weapon?: CharacterItemWeapon,
              public readonly special?: CharacterItemSpecial) {
  }
}
