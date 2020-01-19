import { Injectable } from '@angular/core';
import { CharacterStructure } from './character-structure';
import { Sex } from '../../utils/character/enums/sex.enum';
import { Skin } from '../../utils/character/enums/skin.enum';
import { Ears } from '../../utils/character/enums/ears.enum';
import { Eyes } from '../../utils/character/enums/eyes.enum';
import { Nose } from '../../utils/character/enums/nose.enum';

@Injectable({
  providedIn: 'root'
})
export class CharacterStructureService {

  getNewCharacterStructure(): CharacterStructure {
    return characterStructure;
  }

}

const characterStructure: CharacterStructure = {
  body: {
    sex: [Sex.MALE, Sex.FEMALE],
    skin: [Skin.LIGHT, Skin.TANNED, Skin.TANNED2, Skin.DARK, Skin.DARK2],
    ears: [Ears.DEFAULT, Ears.BIG, Ears.ELVEN],
    eyes: [
      Eyes.DEFAULT, Eyes.BLUE, Eyes.BROWN, Eyes.GRAY,
      Eyes.GREEN, Eyes.ORANGE, Eyes.PURPLE, Eyes.RED, Eyes.YELLOW
    ],
    nose: [Nose.DEFAULT, Nose.BIG, Nose.BUTTON, Nose.STRAIGHT]
  }
};
