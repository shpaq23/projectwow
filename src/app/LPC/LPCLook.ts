import { LPCRace } from 'src/app/LPC/types/LPC-race.type';

export abstract class LPCLook {

  protected constructor(protected race: LPCRace,
                        protected ears: any,
                        protected eyes: any,
                        protected hair: any,
                        protected boots: any,
                        protected legs: any,
                        protected belt: any,
                        protected chest: any,
                        protected head: any,
                        protected shoulders: any,
                        protected hands: any,
                        protected weapon: any,
                        protected special: any) {
  }

  abstract getRaceUrl(): string;

  abstract getEarsUrl(): string;

  abstract getEyesUrl(): string;

  abstract getHairUrl(): string;

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
