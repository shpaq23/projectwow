import { LPCFemaleHairEnum } from 'src/app/LPC/enums/female/LPC-female-hair.enum';
import { LPCFemaleSpecialEnum } from 'src/app/LPC/enums/female/LPC-female-special.enum';
import { LPCBeltEnum } from 'src/app/LPC/enums/LPC-belt.enum';
import { LPCBootsEnum } from 'src/app/LPC/enums/LPC-boots.enum';
import { LPCChestEnum } from 'src/app/LPC/enums/LPC-chest.enum';
import { LPCEyesEnum } from 'src/app/LPC/enums/LPC-eyes.enum';
import { LPCHairColorEnum } from 'src/app/LPC/enums/LPC-hair-color.enum';
import { LPCHandsEnum } from 'src/app/LPC/enums/LPC-hands.enum';
import { LPCHeadEnum } from 'src/app/LPC/enums/LPC-head.enum';
import { LPCLegsEnum } from 'src/app/LPC/enums/LPC-legs.enum';
import { LPCRaceEnum } from 'src/app/LPC/enums/LPC-race.enum';
import { LPCShouldersEnum } from 'src/app/LPC/enums/LPC-shoulders.enum';
import { LPCWeaponEnum } from 'src/app/LPC/enums/LPC-weapon.enum';
import { LPCMaleHairEnum } from 'src/app/LPC/enums/male/LPC-male-hair.enum';
import { LPCMaleRaceEnum } from 'src/app/LPC/enums/male/LPC-male-race.enum';
import { LPCMaleSpecialEnum } from 'src/app/LPC/enums/male/LPC-male-special.enum';
import {
  LPCBelt,
  LPCBoots,
  LPCChest,
  LPCEyes,
  LPCHair,
  LPCHairColor,
  LPCHands,
  LPCHead,
  LPCLegs,
  LPCRace,
  LPCShoulders,
  LPCSpecial,
  LPCWeapon
} from 'src/app/LPC/types/LPC-types.type';

export abstract class LPCLook {

  protected abstract readonly basicUrl: string;

  protected constructor(protected race: LPCRace,
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

  getRaceUrl(): string {
    const prefix = this.basicUrl + 'race/';
    switch (this.race) {
      case LPCRaceEnum.DARK2:
        return prefix + 'dark2.png';
      case LPCRaceEnum.DARK:
        return prefix + 'dark.png';
      case LPCRaceEnum.DARK_ELF2:
        return prefix + 'darkelf2.png';
      case LPCRaceEnum.DARK_ELF:
        return prefix + 'darkelf.png';
      case LPCRaceEnum.LIGHT:
        return prefix + 'light.png';
      case LPCRaceEnum.ORC:
        return prefix + 'orc.png';
      case LPCRaceEnum.RED_ORC:
        return prefix + 'red_orc.png';
      case LPCRaceEnum.TANNED2:
        return prefix + 'tanned2.png';
      case LPCRaceEnum.TANNED:
        return prefix + 'tanned.png';
      case LPCMaleRaceEnum.SKELETON:
        return prefix + 'skeleton.png';
      default:
        return null;
    }
  }

  getEarsUrl(): string {
    const prefix = this.basicUrl + 'ears/';
    if (this.race === LPCRaceEnum.DARK_ELF) {
      return prefix + 'elvenears_darkelf.png';
    }
    if (this.race === LPCRaceEnum.DARK_ELF2) {
      return prefix + 'elvenears_darkelf2.png';
    }
    return null;
  }

  getEyesUrl(): string {
    const prefix = this.basicUrl + 'eyes/';
    switch (this.eyes) {
      case LPCEyesEnum.BLUE:
        return prefix + 'blue.png';
      case LPCEyesEnum.BROW:
        return prefix + 'brown.png';
      case LPCEyesEnum.GRAY:
        return prefix + 'gray.png';
      case LPCEyesEnum.GREEN:
        return prefix + 'green.png';
      case LPCEyesEnum.ORANGE:
        return prefix + 'orange.png';
      case LPCEyesEnum.PURPLE:
        return prefix + 'purple.png';
      case LPCEyesEnum.RED:
        return prefix + 'red.png';
      case LPCEyesEnum.YELLOW:
        return prefix + 'yellow.png';
      default:
        return null;
    }
  }

  getHairUrl(): string {
    const prefix = this.basicUrl + 'hair/';
    switch (this.hair) {
      case LPCFemaleHairEnum.BANGS_LONG:
        return prefix + 'bangslong/' + this.getHairColor();
      case LPCFemaleHairEnum.BANGS_SHORT:
        return prefix + 'bangsshort/' + this.getHairColor();
      case LPCFemaleHairEnum.LOOSE:
        return prefix + 'loose/' + this.getHairColor();
      case LPCFemaleHairEnum.PIXIE:
        return prefix + 'pixie/' + this.getHairColor();
      case LPCFemaleHairEnum.PONY_TAIL:
        return prefix + 'ponytail/' + this.getHairColor();
      case LPCFemaleHairEnum.PRINCESS:
        return prefix + 'princess/' + this.getHairColor();
      case LPCFemaleHairEnum.SWOOP:
        return prefix + 'swoop/' + this.getHairColor();
      case LPCFemaleHairEnum.UNKEMPT:
        return prefix + 'unkempt/' + this.getHairColor();
      case LPCMaleHairEnum.BED_HEAD:
        return prefix + 'bedhead/' + this.getHairColor();
      case LPCMaleHairEnum.LONG:
        return prefix + 'long/' + this.getHairColor();
      case LPCMaleHairEnum.LONG_HAWK:
        return prefix + 'longhawk/' + this.getHairColor();
      case LPCMaleHairEnum.MESSY:
        return prefix + 'messy/' + this.getHairColor();
      case LPCMaleHairEnum.MOHAWK:
        return prefix + 'mohawk/' + this.getHairColor();
      case LPCMaleHairEnum.PAGE:
        return prefix + 'page/' + this.getHairColor();
      case LPCMaleHairEnum.PARTED:
        return prefix + 'parted/' + this.getHairColor();
      case LPCMaleHairEnum.PLAIN:
        return prefix + 'plain/' + this.getHairColor();
      default:
        return null;
    }
  }


  getBootsUrl(): string {
    const prefix = this.basicUrl + 'boots/';
    switch (this.boots) {
      case LPCBootsEnum.BLACK_SHOES:
        return prefix + 'black_shoes.png';
      case LPCBootsEnum.BROWN_SHOES:
        return prefix + 'brown_shoes.png';
      case LPCBootsEnum.GOLDEN_BOOTS:
        return prefix + 'golden_boots.png';
      case LPCBootsEnum.MAROON_SHOES:
        return prefix + 'maroon_shoes.png';
      case LPCBootsEnum.METAL_BOOTS:
        return prefix + 'metal_boots';
      default:
        return null;
    }
  }

  getLegsUrl(): string {
    const prefix = this.basicUrl + 'legs/';
    switch (this.legs) {
      case LPCLegsEnum.GOLDEN_PANTS:
        return prefix + 'golden_pants.png';
      case LPCLegsEnum.MAGENTA_PANTS:
        return prefix + 'magenta_pants.png';
      case LPCLegsEnum.METAL_PANTS:
        return prefix + 'metal_pants.png';
      case LPCLegsEnum.RED_PANTS:
        return prefix + 'red_pants.png';
      case LPCLegsEnum.TEAL_PANTS:
        return prefix + 'teal_pants.png';
      case LPCLegsEnum.WHITE_PANTS:
        return prefix + 'white_pants.png';
      default:
        return null;
    }
  }

  getBeltUrl(): string {
    const prefix = this.basicUrl + 'belt/';
    switch (this.belt) {
      case LPCBeltEnum.CLOTH:
        return prefix + 'white_cloth.png';
      case LPCBeltEnum.LEATHER:
        return prefix + 'leather.png';
      default:
        return null;
    }
  }

  getChestUrl(): string {
    const prefix = this.basicUrl + 'chest/';
    switch (this.chest) {
      case LPCChestEnum.BROWN_SHIRT:
        return prefix + 'brown_shirt.png';
      case LPCChestEnum.CHAIN_CHEST:
        return prefix + 'chain_chest.png';
      case LPCChestEnum.GOLD_CHEST:
        return prefix + 'gold_chest.png';
      case LPCChestEnum.LEATHER_CHEST:
        return prefix + 'leather_chest.png';
      case LPCChestEnum.MAROON_SHIRT:
        return prefix + 'maroon_shirt.png';
      case LPCChestEnum.PLATE_CHEST:
        return prefix + 'plate_shirt.png';
      case LPCChestEnum.TEAL_SHIRT:
        return prefix + 'teal_shirt';
      case LPCChestEnum.WHITE_SHIRT:
        return prefix + 'white_shirt';
      default:
        return null;
    }
  }

  getHeadUrl(): string {
    const prefix = this.basicUrl + 'head/';
    switch (this.head) {
      case LPCHeadEnum.CHAIN_HAT:
        return prefix + 'chainhat.png';
      case LPCHeadEnum.CHAIN_HOOD:
        return prefix + 'chain_hood.png';
      case LPCHeadEnum.CLOTH_HOOD:
        return prefix + 'cloth_hood.png';
      case LPCHeadEnum.GOLDEN_HELM:
        return prefix + 'golden_helm.png';
      case LPCHeadEnum.LEATHER_CAP:
        return prefix + 'leather_cap.png';
      case LPCHeadEnum.METAL_HELM:
        return prefix + 'metal_helm.png';
      case LPCHeadEnum.RED_BANDANNA:
        return prefix + 'red_bandanna.png';
      default:
        return null;
    }
  }

  getShouldersUrl(): string {
    const prefix = this.basicUrl + 'shoulders/';
    switch (this.shoulders) {
      case LPCShouldersEnum.GOLD_ARMS:
        return prefix + 'gold_arms.png';
      case LPCShouldersEnum.LEATHER_ARMS:
        return prefix + 'leather_arms.png';
      case LPCShouldersEnum.PLATE_ARMS:
        return prefix + 'plate_arms.png';
      default:
        return null;
    }
  }

  getHandsUrl(): string {
    const prefix = this.basicUrl + 'hands/';
    switch (this.hands) {
      case LPCHandsEnum.GOLDEN_GLOVES:
        return prefix + 'golden_gloves.png';
      case LPCHandsEnum.METAL_GLOVES:
        return prefix + 'metal_gloves.png';
      default:
        return null;
    }
  }

  getWeaponUrl(): string {
    const prefix = this.basicUrl + 'weapon/';
    switch (this.weapon) {
      case LPCWeaponEnum.BOW: {
        if (this.race === LPCMaleRaceEnum.SKELETON) {
          return prefix + 'bow_skeleton.png';
        } else {
          return prefix + 'bow.png';
        }
      }
      case LPCWeaponEnum.DAGGER:
        return prefix + 'dagger.png';
      case LPCWeaponEnum.SPEAR:
        return prefix + 'spear.png';
      case LPCWeaponEnum.WOOD_WAND:
        return prefix + 'woodwand.png';
      default:
        return null;
    }
  }

  getSpecialUrl(): string {
    const prefix = this.basicUrl + 'special/';
    switch (this.special) {
      case LPCFemaleSpecialEnum.CAPE_BLACK:
        return prefix + 'cape_black.png';
      case LPCFemaleSpecialEnum.CAPE_BLUE:
        return prefix + 'cape_blue.png';
      case LPCFemaleSpecialEnum.CAPE_BROWN:
        return prefix + 'cape_brown.png';
      case LPCFemaleSpecialEnum.CAPE_GRAY:
        return prefix + 'cape_gray.png';
      case LPCFemaleSpecialEnum.CAPE_GREEN:
        return prefix + 'cape_green.png';
      case LPCFemaleSpecialEnum.CAPE_LAVENDER:
        return prefix + 'cape_lavender.png';
      case LPCFemaleSpecialEnum.CAPE_MAROON:
        return prefix + 'cape_maroon.png';
      case LPCFemaleSpecialEnum.CAPE_PINK:
        return prefix + 'cape_pink.png';
      case LPCFemaleSpecialEnum.CAPE_RED:
        return prefix + 'cape_red.png';
      case LPCFemaleSpecialEnum.CAPE_WHITE:
        return prefix + 'cape_white.png';
      case LPCFemaleSpecialEnum.CAPE_YELLOW:
        return prefix + 'cape_yellow.png';
      case LPCMaleSpecialEnum.SHIELD1:
        return prefix + 'shield_male_cutoutforbody.png';
      case LPCMaleSpecialEnum.SHIELD2:
        return prefix + 'shield_male_cutoutforhat.png';
      default:
        return null;
    }
  }

  getQuiverUrl(): string {
    if (this.weapon === LPCWeaponEnum.BOW) {
      return this.basicUrl + 'weapon/quiver.png';
    }
    return null;
  }

  getArrowUrl(): string {
    if (this.weapon === LPCWeaponEnum.BOW) {
      if (this.race === LPCMaleRaceEnum.SKELETON) {
        return this.basicUrl + 'weapon/arrow_skeleton.png';
      } else {
        return this.basicUrl + 'weapon/arrow.png';
      }
    }
    return null;
  }

  protected getHairColor(): string {
    switch (this.hairColor) {
      case LPCHairColorEnum.BLONDE:
        return 'blonde.png';
      case LPCHairColorEnum.BLUE:
        return 'blue.png';
      case LPCHairColorEnum.BRUNETTE:
        return 'brunette.png';
      case LPCHairColorEnum.GREEN:
        return 'green.png';
      case LPCHairColorEnum.PINK:
        return 'pink.png';
      case LPCHairColorEnum.RAVEN:
        return 'raven.png';
      case LPCHairColorEnum.REDHEAD:
        return 'readhead.png';
      case LPCHairColorEnum.WHITE_BLOND:
        return 'white_blonde.png';
      default:
        return null;
    }
  }
}
