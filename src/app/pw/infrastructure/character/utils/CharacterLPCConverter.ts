import { LPCFemaleHairEnum } from 'src/app/LPC/enums/female/LPC-female-hair.enum';
import { LPCFemaleRaceEnum } from 'src/app/LPC/enums/female/LPC-female-race.enum';
import { LPCFemaleSpecialEnum } from 'src/app/LPC/enums/female/LPC-female-special.enum';
import { LPCFemaleWeaponEnum } from 'src/app/LPC/enums/female/LPC-female-weapon.enum';
import { LPCMaleHairEnum } from 'src/app/LPC/enums/male/LPC-male-hair.enum';
import { LPCMaleRaceEnum } from 'src/app/LPC/enums/male/LPC-male-race.enum';
import { LPCMaleSpecialEnum } from 'src/app/LPC/enums/male/LPC-male-special.enum';
import { LPCMaleWeaponEnum } from 'src/app/LPC/enums/male/LPC-male-weapon.enum';
import { LPCFemaleLook } from 'src/app/LPC/LPCFemaleLook';
import { LPCLook } from 'src/app/LPC/LPCLook';
import { LPCMaleLook } from 'src/app/LPC/LPCMaleLook';
import {
  LPCBelt,
  LPCBoots,
  LPCChest,
  LPCHands,
  LPCHead,
  LPCLegs,
  LPCShoulders
} from 'src/app/LPC/types/LPC-types.type';
import { Character } from 'src/app/pw/infrastructure/character/Character';
import { CharacterGenderEnum } from 'src/app/pw/infrastructure/character/enums/character-gender.enum';
import { CharacterItem } from 'src/app/pw/infrastructure/character/items/CharacterItem';
import { CharacterItemLook } from 'src/app/pw/infrastructure/character/types/character-item-look.type';

export class CharacterLPCConverter {
  static fromCharacter(character: Character): LPCLook {
    const getItemOrNull = (item: CharacterItem): CharacterItemLook => item ? item.look : null;
    if (character.getGender().data === CharacterGenderEnum.MALE) {
      return new LPCMaleLook(
        character.getLook().race as LPCMaleRaceEnum,
        character.getLook().ears,
        character.getLook().eyes,
        character.getLook().hair as LPCMaleHairEnum,
        character.getLook().hairColor,
        getItemOrNull(character.getEquipment().boots) as LPCBoots,
        getItemOrNull(character.getEquipment().legs) as LPCLegs,
        getItemOrNull(character.getEquipment().belt) as LPCBelt,
        getItemOrNull(character.getEquipment().chest) as LPCChest,
        getItemOrNull(character.getEquipment().head) as LPCHead,
        getItemOrNull(character.getEquipment().shoulders) as LPCShoulders,
        getItemOrNull(character.getEquipment().hands) as LPCHands,
        getItemOrNull(character.getEquipment().weapon) as LPCMaleWeaponEnum,
        getItemOrNull(character.getEquipment().special) as LPCMaleSpecialEnum
      );
    } else {
      return new LPCFemaleLook(
        character.getLook().race as LPCFemaleRaceEnum,
        character.getLook().ears,
        character.getLook().eyes,
        character.getLook().hair as LPCFemaleHairEnum,
        character.getLook().hairColor,
        getItemOrNull(character.getEquipment().boots) as LPCBoots,
        getItemOrNull(character.getEquipment().legs) as LPCLegs,
        getItemOrNull(character.getEquipment().belt) as LPCBelt,
        getItemOrNull(character.getEquipment().chest) as LPCChest,
        getItemOrNull(character.getEquipment().head) as LPCHead,
        getItemOrNull(character.getEquipment().shoulders) as LPCShoulders,
        getItemOrNull(character.getEquipment().hands) as LPCHands,
        getItemOrNull(character.getEquipment().weapon) as LPCFemaleWeaponEnum,
        getItemOrNull(character.getEquipment().special) as LPCFemaleSpecialEnum
      );
    }
  }

}
