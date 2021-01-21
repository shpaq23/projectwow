import { LPCFemaleChestEnum } from 'src/app/LPC/enums/female/LPC-female-chest.enum';
import { LPCFemaleHairEnum } from 'src/app/LPC/enums/female/LPC-female-hair.enum';
import { LPCFemaleRaceEnum } from 'src/app/LPC/enums/female/LPC-female-race.enum';
import { LPCFemaleSpecialEnum } from 'src/app/LPC/enums/female/LPC-female-special.enum';
import { LPCFemaleWeaponEnum } from 'src/app/LPC/enums/female/LPC-female-weapon.enum';
import { LPCBeltEnum } from 'src/app/LPC/enums/LPC-belt.enum';
import { LPCBootsEnum } from 'src/app/LPC/enums/LPC-boots.enum';
import { LPCEarsEnum } from 'src/app/LPC/enums/LPC-ears.enum';
import { LPCEyesEnum } from 'src/app/LPC/enums/LPC-eyes.enum';
import { LPCHairColorEnum } from 'src/app/LPC/enums/LPC-hair-color.enum';
import { LPCHandsEnum } from 'src/app/LPC/enums/LPC-hands.enum';
import { LPCHeadEnum } from 'src/app/LPC/enums/LPC-head.enum';
import { LPCLegsEnum } from 'src/app/LPC/enums/LPC-legs.enum';
import { LPCShouldersEnum } from 'src/app/LPC/enums/LPC-shoulders.enum';
import { LPCLook } from 'src/app/LPC/LPCLook';

export class LPCFemaleLook extends LPCLook {

  constructor(race: LPCFemaleRaceEnum,
              ears: LPCEarsEnum,
              eyes: LPCEyesEnum,
              hair: LPCFemaleHairEnum,
              hairColor: LPCHairColorEnum,
              boots: LPCBootsEnum,
              legs: LPCLegsEnum,
              belt: LPCBeltEnum,
              chest: LPCFemaleChestEnum,
              head: LPCHeadEnum,
              shoulders: LPCShouldersEnum,
              hands: LPCHandsEnum,
              weapon: LPCFemaleWeaponEnum,
              special: LPCFemaleSpecialEnum) {
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
