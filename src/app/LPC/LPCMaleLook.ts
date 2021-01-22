import { LPCBeltEnum } from 'src/app/LPC/enums/LPC-belt.enum';
import { LPCBootsEnum } from 'src/app/LPC/enums/LPC-boots.enum';
import { LPCChestEnum } from 'src/app/LPC/enums/LPC-chest.enum';
import { LPCEarsEnum } from 'src/app/LPC/enums/LPC-ears.enum';
import { LPCEyesEnum } from 'src/app/LPC/enums/LPC-eyes.enum';
import { LPCHairColorEnum } from 'src/app/LPC/enums/LPC-hair-color.enum';
import { LPCHandsEnum } from 'src/app/LPC/enums/LPC-hands.enum';
import { LPCHeadEnum } from 'src/app/LPC/enums/LPC-head.enum';
import { LPCLegsEnum } from 'src/app/LPC/enums/LPC-legs.enum';
import { LPCShouldersEnum } from 'src/app/LPC/enums/LPC-shoulders.enum';
import { LPCMaleHairEnum } from 'src/app/LPC/enums/male/LPC-male-hair.enum';
import { LPCMaleRaceEnum } from 'src/app/LPC/enums/male/LPC-male-race.enum';
import { LPCMaleSpecialEnum } from 'src/app/LPC/enums/male/LPC-male-special.enum';
import { LPCMaleWeaponEnum } from 'src/app/LPC/enums/male/LPC-male-weapon.enum';
import { LPCLook } from 'src/app/LPC/LPCLook';

export class LPCMaleLook extends LPCLook {

  constructor(race: LPCMaleRaceEnum,
              ears: LPCEarsEnum,
              eyes: LPCEyesEnum,
              hair: LPCMaleHairEnum,
              hairColor: LPCHairColorEnum,
              boots: LPCBootsEnum,
              legs: LPCLegsEnum,
              belt: LPCBeltEnum,
              chest: LPCChestEnum,
              head: LPCHeadEnum,
              shoulders: LPCShouldersEnum,
              hands: LPCHandsEnum,
              weapon: LPCMaleWeaponEnum,
              special: LPCMaleSpecialEnum) {
    super(race, ears, eyes, hair, hairColor, boots, legs, belt, chest, head, shoulders, hands, weapon, special);
  }

  getBeltUrl(): string {
    return '';
  }

  getBootsUrl(): string {
    return '';
  }

  getChestUrl(): string {
    return '';
  }

  getEarsUrl(): string {
    return '';
  }

  getEyesUrl(): string {
    return '';
  }

  getHairUrl(): string {
    return '';
  }

  getHairColor(): string {
    return '';
  }

  getHandUrl(): string {
    return '';
  }

  getHeadUrl(): string {
    return '';
  }

  getLegsUrl(): string {
    return '';
  }

  getRaceUrl(): string {
    return '';
  }

  getShouldersUrl(): string {
    return '';
  }

  getSpecialUrl(): string {
    return '';
  }

  getWeaponUrl(): string {
    return '';
  }

}
