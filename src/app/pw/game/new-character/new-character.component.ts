import {Component, OnInit} from '@angular/core';
import {NewCharacterStructure, NewCharacterStructureInterface} from '../../../services/character/new-character-structure';
import {Store} from '@ngrx/store';
import {CharacterState} from '../../../store/state/character.state';
import {Sex} from '../../../utils/character/enums/sex.enum';
import {Skin} from '../../../utils/character/enums/skin.enum';
import {Nose} from '../../../utils/character/enums/nose.enum';
import {Eyes} from '../../../utils/character/enums/eyes.enum';
import {Ears} from '../../../utils/character/enums/ears.enum';
import {CharacterLook} from '../../../utils/character/character-look';
import {Character} from '../../../utils/character/Character';
import {UpdateCharacter} from '../../../store/actions/character.action';
import {MaleHair} from '../../../utils/character/enums/male-hair.enum';
import {FemaleHair} from '../../../utils/character/enums/female-hair.enum';
import {HairColor} from '../../../utils/character/enums/hair-color.enum';
import {Legs} from '../../../utils/character/enums/legs.enum';
import {Torso} from '../../../utils/character/enums/torso.enum';
import {Shoes} from '../../../utils/character/enums/shoes.enum';
import {Weapon} from '../../../utils/character/enums/weapon.enum';

@Component({
  selector: 'pw-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.scss']
})
export class NewCharacterComponent implements OnInit {

  newCharacterStructure: NewCharacterStructureInterface;
  selectedSex: Sex = Sex.MALE;
  selectedSkin: Skin = Skin.LIGHT;
  selectedNose: Nose = Nose.DEFAULT;
  selectedEyes: Eyes = Eyes.DEFAULT;
  selectedEars: Ears = Ears.DEFAULT;
  selectedHair: MaleHair | FemaleHair = MaleHair.DEFAULT;
  selectedHairColor: HairColor = HairColor.BLONDE;
  selectedTorso: Torso = Torso.DEFAULT;
  selectedLegs: Legs = Legs.DEFAULT;
  selectedShoes: Shoes = Shoes.DEFAULT;
  selectedWeapon: Weapon = Weapon.DAGGER;


  constructor(private characterStore: Store<CharacterState>) {

  }

  ngOnInit(): void {
    this.newCharacterStructure = NewCharacterStructure.getStructure();
  }

  selectSex(sex: string): void {
    this.selectedSex = sex as Sex;
    this.selectedHair = this.selectedSex === Sex.MALE ? MaleHair.DEFAULT : FemaleHair.DEFAULT;
    this.setCharacter();
  }

  selectSkin(skin: string): void {
    this.selectedSkin = skin as Skin;
    this.setCharacter();
  }

  selectNose(nose: string): void {
    this.selectedNose = nose as Nose;
    this.setCharacter();
  }

  selectEyes(eyes: string): void {
    this.selectedEyes = eyes as Eyes;
    this.setCharacter();
  }

  selectEars(ears: string): void {
    this.selectedEars = ears as Ears;
    this.setCharacter();
  }

  selectHair(hair: string): void {
    if (this.selectedSex === Sex.MALE) {
      this.selectedHair = hair as MaleHair;
    } else {
      this.selectedHair = hair as FemaleHair;
    }
    this.setCharacter();
  }

  selectHairColor(hairColor: string): void {
    this.selectedHairColor = hairColor as HairColor;
    this.setCharacter();
  }

  selectTorso(torso: string): void {
    this.selectedTorso = torso as Torso;
    this.setCharacter();
  }

  selectLegs(legs: string): void {
    this.selectedLegs = legs as Legs;
    this.setCharacter();
  }

  selectShoes(shoes: string): void {
    this.selectedShoes = shoes as Shoes;
    this.setCharacter();
  }

  selectWeapon(weapon: string): void {
    this.selectedWeapon = weapon as Weapon;
    this.setCharacter();
  }

  private setCharacter(): void {
    const look: CharacterLook = {
      skin: this.selectedSkin,
      sex: this.selectedSex,
      nose: this.selectedNose,
      eyes: this.selectedEyes,
      ears: this.selectedEars,
      hair: this.selectedHair,
      hairColor: this.selectedHairColor,
      torso: this.selectedTorso,
      legs: this.selectedLegs,
      shoes: this.selectedShoes,
      weapon: this.selectedWeapon
    };
    const character = new Character(look);
    this.characterStore.dispatch(new UpdateCharacter(character));
  }

}
