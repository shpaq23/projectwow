import {Sex} from '../../../infrastructure/character/enums/sex.enum';
import {Skin} from '../../../infrastructure/character/enums/skin.enum';
import {Ears} from '../../../infrastructure/character/enums/ears.enum';
import {Eyes} from '../../../infrastructure/character/enums/eyes.enum';
import {Nose} from '../../../infrastructure/character/enums/nose.enum';
import {MaleHair} from '../../../infrastructure/character/enums/male-hair.enum';
import {FemaleHair} from '../../../infrastructure/character/enums/female-hair.enum';
import {HairColor} from '../../../infrastructure/character/enums/hair-color.enum';
import {Torso} from '../../../infrastructure/character/enums/torso.enum';
import {Legs} from '../../../infrastructure/character/enums/legs.enum';
import {Shoes} from '../../../infrastructure/character/enums/shoes.enum';
import {Weapon} from '../../../infrastructure/character/enums/weapon.enum';

export interface NewCharacterStructureInterface {
  sex: string[];
  skin: string[];
  ears: string[];
  eyes: string[];
  nose: string[];
  maleHair: string[];
  femaleHair: string[];
  hairColor: string[];
  torso: string[];
  legs: string[];
  shoes: string[];
  weapon: string[];
}

export class NewCharacterStructure {

  static getStructure(): NewCharacterStructureInterface {
    return {
      sex: [Sex.MALE, Sex.FEMALE],
      skin: [Skin.LIGHT, Skin.TANNED, Skin.TANNED2, Skin.DARK, Skin.DARK2],
      ears: [Ears.DEFAULT, Ears.BIG, Ears.ELVEN],
      eyes: [
        Eyes.DEFAULT, Eyes.BLUE, Eyes.BROWN, Eyes.GRAY,
        Eyes.GREEN, Eyes.ORANGE, Eyes.PURPLE, Eyes.RED, Eyes.YELLOW
      ],
      nose: [Nose.DEFAULT, Nose.BIG, Nose.BUTTON, Nose.STRAIGHT],
      maleHair: [
        MaleHair.DEFAULT, MaleHair.BEDHEAD, MaleHair.LONG, MaleHair.MOHAWK,
        MaleHair.PAGE, MaleHair.PARTED, MaleHair.PLAIN
      ],
      femaleHair: [
        FemaleHair.DEFAULT, FemaleHair.LOOSE, FemaleHair.PIXIE, FemaleHair.PONYTAIL,
        FemaleHair.PRINCESS, FemaleHair.SWOOP, FemaleHair.UNKEMPT
      ],
      hairColor: [
        HairColor.WHITEBLONDE, HairColor.BLONDE, HairColor.DARKBLONDE, HairColor.BRUNETTE,
        HairColor.BLUE, HairColor.GREEN, HairColor.PINK, HairColor.RAVEN
      ],
      torso: [Torso.DEFAULT, Torso.BROWNSHIRT, Torso.MAROONSHIRT, Torso.TEALSHIRT, Torso.WHITESHIRT],
      legs: [Legs.DEFAULT, Legs.MAGENTAPANTS, Legs.REDPANTS, Legs.TEALPANTS, Legs.WHITEPANTS],
      shoes: [Shoes.DEFAULT, Shoes.BLACKSHOES, Shoes.BROWNSHOES, Shoes.MAROONSHOES],
      weapon: [Weapon.DAGGER]
    };
  }

}

