import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CharacterState } from '../../../store/state/character.state';
import { getNewCharacter } from '../../../store/selectors/character.selector';
import { NewCharacterRace } from '../../../services/api/character.service';
import { BaseComponent } from '../../base-component';
import { CharacterRaceClassEnum, CharacterRaceEnum, CharacterRaceFactionEnum, CharacterRaceGenderEnum } from '../character.enums';
import { WowSimpleIcon } from '../../../ui/icons/wow-icon/wow-icon.component';

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

  chosenRacialAbilities: string[] = ['Diplomancy', 'The Human Spirit'];

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

  isRacialAbilityChosen(racial: string): boolean {
    return this.chosenRacialAbilities.includes(racial);
  }

  getChosenRaceClasses(): WowSimpleIcon[] {
    const characterClasses = this.newCharacter
      .filter(race => race.gender.name === this.chosenGender &&
        race.race.name === this.chosenRace);

    return characterClasses[0].availableClasses;
  }

  getChosenRaceRacialAbilities(): WowSimpleIcon[] {
    const racialAbilities = this.newCharacter
      .filter(race => race.gender.name === this.chosenGender &&
      race.race.name === this.chosenRace);

    return racialAbilities[0].racialAbilities;
  }

  private initChosen(): void {
    this.chosenRace = CharacterRaceEnum.HUMAN;
    this.chosenClass = CharacterRaceClassEnum.WARRIOR;
    this.chosenGender = CharacterRaceGenderEnum.MALE;
  }

}
