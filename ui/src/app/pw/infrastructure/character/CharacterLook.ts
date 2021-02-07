import { LPCEyes, LPCHair, LPCHairColor, LPCRace } from 'src/app/LPC/types/LPC-types.type';

export class CharacterLook {
  constructor(public readonly race: LPCRace,
              public readonly eyes: LPCEyes,
              public readonly hair: LPCHair,
              public readonly hairColor: LPCHairColor) {
  }
}
