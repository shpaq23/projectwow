import { LPCFemaleHairEnum } from 'src/app/LPC/enums/female/LPC-female-hair.enum';
import { LPCFemaleSpecialEnum } from 'src/app/LPC/enums/female/LPC-female-special.enum';
import { LPCRaceEnum } from 'src/app/LPC/enums/LPC-race.enum';
import { LPCWeaponEnum } from 'src/app/LPC/enums/LPC-weapon.enum';
import { LPCLook } from 'src/app/LPC/LPCLook';
import {
  LPCBelt,
  LPCBoots,
  LPCChest,
  LPCEars,
  LPCEyes,
  LPCHairColor,
  LPCHands,
  LPCHead,
  LPCLegs,
  LPCShoulders
} from 'src/app/LPC/types/LPC-types.type';

export class LPCFemaleLook extends LPCLook {

  protected readonly basicUrl = 'LPC/female/';

  constructor(race: LPCRaceEnum,
              eyes: LPCEyes,
              hair: LPCFemaleHairEnum,
              hairColor: LPCHairColor,
              boots: LPCBoots,
              legs: LPCLegs,
              belt: LPCBelt,
              chest: LPCChest,
              head: LPCHead,
              shoulders: LPCShoulders,
              hands: LPCHands,
              weapon: LPCWeaponEnum,
              special: LPCFemaleSpecialEnum) {
    super(race, eyes, hair, hairColor, boots, legs, belt, chest, head, shoulders, hands, weapon, special);
  }
}
