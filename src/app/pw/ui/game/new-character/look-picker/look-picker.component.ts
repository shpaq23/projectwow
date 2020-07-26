import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Sex } from '../../../../infrastructure/character/enums/sex.enum';
import { Skin } from '../../../../infrastructure/character/enums/skin.enum';
import { Nose } from '../../../../infrastructure/character/enums/nose.enum';
import { Eyes } from '../../../../infrastructure/character/enums/eyes.enum';
import { Ears } from '../../../../infrastructure/character/enums/ears.enum';
import { MaleHair } from '../../../../infrastructure/character/enums/male-hair.enum';
import { FemaleHair } from '../../../../infrastructure/character/enums/female-hair.enum';
import { HairColor } from '../../../../infrastructure/character/enums/hair-color.enum';
import { Torso } from '../../../../infrastructure/character/enums/torso.enum';
import { Legs } from '../../../../infrastructure/character/enums/legs.enum';
import { Shoes } from '../../../../infrastructure/character/enums/shoes.enum';
import { Weapon } from '../../../../infrastructure/character/enums/weapon.enum';
import { NewCharacterStructure, NewCharacterStructureInterface } from '../new-character-structure';
import { CharacterLook } from '../../../../infrastructure/character/character-look';
import { Character } from '../../../../infrastructure/character/Character';
import { UpdateCharacter } from '../../../../../store/actions/character.action';
import { Store } from '@ngrx/store';
import { CharacterState } from '../../../../../store/state/character.state';

@Component({
  selector: 'pw-look-picker',
  templateUrl: './look-picker.component.html',
  styleUrls: ['./look-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LookPickerComponent implements OnInit {

  newCharacterStructure: NewCharacterStructureInterface;

  selectedSex: Sex;
  selectedSkin: Skin;
  selectedNose: Nose;
  selectedEyes: Eyes;
  selectedEars: Ears;
  selectedHair: MaleHair | FemaleHair;
  selectedHairColor: HairColor;
  selectedTorso: Torso;
  selectedLegs: Legs;
  selectedShoes: Shoes;
  selectedWeapon: Weapon = Weapon.DAGGER;

  constructor(private characterStore: Store<CharacterState>) { }

  ngOnInit() {
    this.newCharacterStructure = NewCharacterStructure.getStructure();
    this.selectRandomLook();
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

  selectRandomLook(): void {
    this.selectedSex = this.newCharacterStructure.sex[Math.round(Math.random())] as Sex;
    this.selectedSkin = this.newCharacterStructure.skin[Math.floor(Math.random() * 5)] as Skin;
    this.selectedEars = this.newCharacterStructure.ears[Math.floor(Math.random() * 2) + 1] as Ears;
    this.selectedEyes = this.newCharacterStructure.eyes[Math.floor(Math.random() * 8) + 1] as Eyes;
    this.selectedNose = this.newCharacterStructure.nose[Math.floor(Math.random() * 3) + 1] as Nose;
    this.selectedHair = this.selectedSex === Sex.MALE ?
      this.newCharacterStructure.maleHair[Math.floor(Math.random() * 6) + 1] as MaleHair :
      this.newCharacterStructure.femaleHair[Math.floor(Math.random() * 6) + 1] as FemaleHair;
    this.selectedHairColor = this.newCharacterStructure.hairColor[Math.floor(Math.random() * 8)] as HairColor;
    this.selectedTorso = this.newCharacterStructure.torso[Math.floor(Math.random() * 4) + 1] as Torso;
    this.selectedLegs = this.newCharacterStructure.legs[Math.floor(Math.random() * 4) + 1] as Legs;
    this.selectedShoes = this.newCharacterStructure.shoes[Math.floor(Math.random() * 3) + 1] as Shoes;

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
