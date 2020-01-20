import { Injectable } from '@angular/core';
import { Character } from '../../utils/character/Character';
import { Skin } from '../../utils/character/enums/skin.enum';
import { Ears } from '../../utils/character/enums/ears.enum';
import { Eyes } from '../../utils/character/enums/eyes.enum';
import { Nose } from '../../utils/character/enums/nose.enum';
import { CharacterLook } from '../../utils/character/character-look';

@Injectable({
  providedIn: 'root'
})
export class CharacterAssetsService {

  private assetsPath = 'assets/character-generator';
  private assetsExtension = '.png';

  getSkin(character: Character): string {
    const look = character.getLook();
    if (!look.skin || !look.sex) {
      return '';
    }
    return this.getBodyPath(look) +
      '/skin' +
      `/${this.stringConverter(look.skin)}` +
      `-${Skin.INDEX}` +
      this.assetsExtension;
  }

  getEyes(character: Character): string {
    const look = character.getLook();
    if (!look.eyes || look.eyes === 'Default' || !look.sex) {
      return '';
    }
    return this.getBodyPath(look) +
      '/eyes' +
      `/${this.stringConverter(look.eyes)}` +
      `-${Eyes.INDEX}` +
      this.assetsExtension;
  }

  getNose(character: Character): string {
    const look = character.getLook();
    if (!look.nose || look.nose === 'Default' || !look.skin || !look.sex) {
      return '';
    }
    return this.getBodyPath(look) +
      '/nose' +
      `/${this.stringConverter(look.nose)}` +
      `_${this.stringConverter(look.skin)}` +
      `-${Nose.INDEX}` +
      this.assetsExtension;
  }

  getEars(character: Character): string {
    const look = character.getLook();
    if (!look.ears || look.ears === 'Default' || !look.skin || !look.sex) {
      return '';
    }
    return this.getBodyPath(look) +
      '/ears' +
      `/${this.stringConverter(look.ears)}` +
      `_${this.stringConverter(look.skin)}` +
      `-${Ears.INDEX}` +
      this.assetsExtension;
  }



  private getBodyPath(look: CharacterLook): string {
    return this.assetsPath +
      '/body' +
      `/${this.stringConverter(look.sex)}`;
  }

  private stringConverter(value: string): string {
    return value && value.toLowerCase().replace(/\s/g, '');
  }

}
