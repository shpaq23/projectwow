import { Component, OnInit } from '@angular/core';
import {NewCharacterStructure, NewCharacterStructureInterface} from '../../../services/character/new-character-structure';
import { Store } from '@ngrx/store';
import { CharacterState } from '../../../store/state/character.state';
import { Sex } from '../../../utils/character/enums/sex.enum';
import { Skin } from '../../../utils/character/enums/skin.enum';
import { Nose } from '../../../utils/character/enums/nose.enum';
import { Eyes } from '../../../utils/character/enums/eyes.enum';
import { Ears } from '../../../utils/character/enums/ears.enum';
import { CharacterLook } from '../../../utils/character/character-look';
import { Character } from '../../../utils/character/Character';
import { UpdateCharacter } from '../../../store/actions/character.action';

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


  constructor(private characterStore: Store<CharacterState>) {

  }

  ngOnInit(): void {
    this.newCharacterStructure = NewCharacterStructure.getStructure();
  }

  selectSex(sex: string): void {
    this.selectedSex = sex as Sex;
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

  private setCharacter(): void {
    const look: CharacterLook = {
      skin: this.selectedSkin,
      sex: this.selectedSex,
      nose: this.selectedNose,
      eyes: this.selectedEyes,
      ears: this.selectedEars
    };
    const character = new Character(look);
    this.characterStore.dispatch(new UpdateCharacter(character));
  }

}
