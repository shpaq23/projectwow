import { Sex } from './enums/sex.enum';
import { Eyes } from './enums/eyes.enum';
import { Nose } from './enums/nose.enum';
import { Skin } from './enums/skin.enum';
import { Ears } from './enums/ears.enum';

export interface CharacterLook {
  sex: Sex;
  skin: Skin;
  eyes: Eyes;
  nose: Nose;
  ears: Ears;
}
