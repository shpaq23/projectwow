import {Sex} from './enums/sex.enum';
import {Eyes} from './enums/eyes.enum';
import {Nose} from './enums/nose.enum';
import {Skin} from './enums/skin.enum';
import {Ears} from './enums/ears.enum';
import {HairColor} from './enums/hair-color.enum';
import {FemaleHair} from './enums/female-hair.enum';
import {MaleHair} from './enums/male-hair.enum';
import {Torso} from './enums/torso.enum';
import {Legs} from './enums/legs.enum';
import {Shoes} from './enums/shoes.enum';
import {Weapon} from './enums/weapon.enum';

export interface CharacterLook {
  sex: Sex;
  skin: Skin;
  eyes: Eyes;
  nose: Nose;
  ears: Ears;
  hair: MaleHair | FemaleHair;
  hairColor: HairColor;
  torso: Torso;
  legs: Legs;
  shoes: Shoes;
  weapon: Weapon;
}
