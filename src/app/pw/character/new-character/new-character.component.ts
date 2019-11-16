import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CharacterState } from '../../../store/state/character.state';
import { getNewCharacter } from '../../../store/selectors/character.selector';
import { NewCharacterRace } from '../../../services/api/character.service';
import { BaseComponent } from '../../base-component';
import { CharacterRaceClassEnum, CharacterRaceEnum, CharacterRaceFactionEnum, CharacterRaceGenderEnum } from '../character.enums';

@Component({
  selector: 'pw-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.scss']
})
export class NewCharacterComponent extends BaseComponent implements OnInit {

  newCharacter: NewCharacterRace[] = null;
  chosenRace: CharacterRaceEnum;
  chosenClass: CharacterRaceClassEnum;
  chosenGender: CharacterRaceGenderEnum;
  faction = CharacterRaceFactionEnum;
  gender = CharacterRaceGenderEnum;

  constructor(private characterStore: Store<CharacterState>) {
    super();
  }

  ngOnInit() {
    this.initChosen();
    this.characterStore
      .select(getNewCharacter)
      .pipe(this.takeUntilDestroy())
      .subscribe(newCharacter => {
        this.newCharacter = newCharacter;
        console.log(this.newCharacter);
      });
  }


  meetRequirements(newCharacter: NewCharacterRace, faction: CharacterRaceFactionEnum): boolean {
    return newCharacter.gender.name === this.chosenGender &&
      newCharacter.faction.name === faction;
  }

  isRaceChosen(newCharacter: NewCharacterRace): boolean {
    return newCharacter.race.name === this.chosenRace &&
      newCharacter.gender.name === this.chosenGender;
  }

  isGenderChosen(gender: CharacterRaceGenderEnum): boolean {
    return this.chosenGender === gender;
  }

  private initChosen(): void {
    this.chosenRace = CharacterRaceEnum.HUMAN;
    this.chosenClass = CharacterRaceClassEnum.WARRIOR;
    this.chosenGender = CharacterRaceGenderEnum.MALE;
  }

}
