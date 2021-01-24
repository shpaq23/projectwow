import { LPCMaleHairEnum } from 'src/app/LPC/enums/male/LPC-male-hair.enum';
import { LPCMaleSpecialEnum } from 'src/app/LPC/enums/male/LPC-male-special.enum';
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
  LPCRace,
  LPCShoulders,
  LPCWeapon
} from 'src/app/LPC/types/LPC-types.type';

export class LPCMaleLook extends LPCLook {

  protected readonly basicUrl = 'LPC/male/';

  constructor(race: LPCRace,
              eyes: LPCEyes,
              hair: LPCMaleHairEnum,
              hairColor: LPCHairColor,
              boots: LPCBoots,
              legs: LPCLegs,
              belt: LPCBelt,
              chest: LPCChest,
              head: LPCHead,
              shoulders: LPCShoulders,
              hands: LPCHands,
              weapon: LPCWeapon,
              special: LPCMaleSpecialEnum) {
    super(race, eyes, hair, hairColor, boots, legs, belt, chest, head, shoulders, hands, weapon, special);
  }
}
