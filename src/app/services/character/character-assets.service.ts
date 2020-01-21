import {Injectable} from '@angular/core';
import {Character} from '../../utils/character/Character';
import {Skin} from '../../utils/character/enums/skin.enum';
import {Ears} from '../../utils/character/enums/ears.enum';
import {Eyes} from '../../utils/character/enums/eyes.enum';
import {Nose} from '../../utils/character/enums/nose.enum';
import {CharacterLook} from '../../utils/character/character-look';
import {Sex} from '../../utils/character/enums/sex.enum';
import {MaleHair} from '../../utils/character/enums/male-hair.enum';
import {FemaleHair} from '../../utils/character/enums/female-hair.enum';
import {Torso} from '../../utils/character/enums/torso.enum';
import {Legs} from '../../utils/character/enums/legs.enum';
import {Shoes} from '../../utils/character/enums/shoes.enum';
import {Weapon} from '../../utils/character/enums/weapon.enum';

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

  getHair(character: Character): string {
    const look = character.getLook();
    if (!look.hair || look.hair === 'Default' || !look.sex) {
      return '';
    }
    return this.getHairPath(look) +
      `/${this.stringConverter(look.hair)}` +
      `/${this.stringConverter(look.hairColor, '-')}` +
      `-${look.sex === Sex.MALE ? MaleHair.INDEX : FemaleHair.INDEX}` +
      this.assetsExtension;
  }

  getTorso(character: Character): string {
    const look = character.getLook();
    if (!look.torso || look.torso === 'Default' || !look.sex) {
      return '';
    }
    return this.getTorsoPath(look) +
      `/${this.stringConverter(this.stringSplitter(look.torso)[0])}` +
      `_${look.sex === Sex.MALE ? 'longsleeve' : 'sleeveless'}` +
      `-${Torso.INDEX}` +
      this.assetsExtension;
  }

  getLegs(character: Character): string {
    const look = character.getLook();
    if (!look.legs || look.legs === 'Default' || !look.sex) {
      return '';
    }
    return this.getLegsPath(look) +
      `/${this.stringConverter(look.legs, '_')}` +
      `_${this.stringConverter(look.sex)}` +
      `-${Legs.INDEX}` +
      this.assetsExtension;
  }

  getShoes(character: Character): string {
    const look = character.getLook();
    if (!look.shoes || look.shoes === 'Default' || !look.sex) {
      return '';
    }
    return this.getShoesPath(look) +
      `/${this.stringConverter(look.shoes, '_')}` +
      `_${this.stringConverter(look.sex)}` +
      `-${Shoes.INDEX}` +
      this.assetsExtension;
  }

  getWeapon(character: Character): string {
    const look = character.getLook();
    if (!look.weapon || !look.sex) {
      return '';
    }
    return this.getWeaponPath(look) +
      `/${this.stringConverter(look.weapon)}` +
      `_${this.stringConverter(look.sex)}` +
      `-${Weapon.INDEX}` +
      this.assetsExtension;
  }

  private getBodyPath(look: CharacterLook): string {
    return this.assetsPath +
      '/body' +
      `/${this.stringConverter(look.sex)}`;
  }

  private getHairPath(look: CharacterLook): string {
    return this.assetsPath +
      '/hair' +
      `/${this.stringConverter(look.sex)}`;
  }

  private getTorsoPath(look: CharacterLook): string {
    return this.assetsPath +
      '/torso' +
      `/${this.stringConverter(look.sex)}`;
  }

  private getLegsPath(look: CharacterLook): string {
    return this.assetsPath +
      '/legs' +
      `/${this.stringConverter(look.sex)}`;
  }

  private getShoesPath(look: CharacterLook): string {
    return this.assetsPath +
      '/shoes' +
      `/${this.stringConverter(look.sex)}`;
  }

  private getWeaponPath(look: CharacterLook): string {
    return this.assetsPath +
      '/weapons' +
      `/${this.stringConverter(look.sex)}`;
  }


  private stringConverter(value: string, replacer = ''): string {
    return value && value.toLowerCase().replace(/\s/g, replacer);
  }

  private stringSplitter(value: string, splitter = ' '): string[] {
    return value.split(splitter);
  }

}
