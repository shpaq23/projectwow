import { Component, OnInit } from '@angular/core';
import { CharacterStructureService } from '../../../services/character/character-structure.service';
import { CharacterStructure } from '../../../services/character/character-structure';
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

  newCharacterStructure: CharacterStructure;
  selectedSex: Sex = Sex.MALE;
  selectedSkin: Skin = Skin.LIGHT;
  selectedNose: Nose = Nose.DEFAULT;
  selectedEyes: Eyes = Eyes.DEFAULT;
  selectedEars: Ears = Ears.DEFAULT;


  constructor(private newCharacterService: CharacterStructureService,
              private characterStore: Store<CharacterState>) {

  }

  ngOnInit(): void {
    this.newCharacterStructure = this.newCharacterService.getNewCharacterStructure();
  }

  selectSex(sex: Sex): void {
    this.selectedSex = sex;
    this.setCharacter();
  }

  selectSkin(skin: Skin): void {
    this.selectedSkin = skin;
    this.setCharacter();
  }

  selectNose(nose: Nose): void {
    this.selectedNose = nose;
    this.setCharacter();
  }

  selectEyes(eyes: Eyes): void {
    this.selectedEyes = eyes;
    this.setCharacter();
  }

  selectEars(ears: Ears): void {
    this.selectedEars = ears;
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
