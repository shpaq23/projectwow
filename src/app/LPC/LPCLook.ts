import {
  LPCBelt,
  LPCBoots, LPCChest,
  LPCEars,
  LPCEyes,
  LPCHair,
  LPCHairColor, LPCHands, LPCHead,
  LPCLegs,
  LPCRace, LPCShoulders, LPCSpecial, LPCWeapon
} from 'src/app/LPC/types/LPC-types.type';

export abstract class LPCLook {

  protected constructor(protected race: LPCRace,
                        protected ears: LPCEars,
                        protected eyes: LPCEyes,
                        protected hair: LPCHair,
                        protected hairColor: LPCHairColor,
                        protected boots: LPCBoots,
                        protected legs: LPCLegs,
                        protected belt: LPCBelt,
                        protected chest: LPCChest,
                        protected head: LPCHead,
                        protected shoulders: LPCShoulders,
                        protected hands: LPCHands,
                        protected weapon: LPCWeapon,
                        protected special: LPCSpecial) {
  }

  abstract getRaceUrl(): string;

  abstract getEarsUrl(): string;

  abstract getEyesUrl(): string;

  abstract getHairUrl(): string;

  abstract getHairColor(): string;

  abstract getBootsUrl(): string;

  abstract getLegsUrl(): string;

  abstract getBeltUrl(): string;

  abstract getChestUrl(): string;

  abstract getHeadUrl(): string;

  abstract getShouldersUrl(): string;

  abstract getHandUrl(): string;

  abstract getWeaponUrl(): string;

  abstract getSpecialUrl(): string;

}
