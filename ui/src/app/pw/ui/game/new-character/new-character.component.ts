import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { CreateCharacterDto } from 'src/app/api/dtos/character/create-character.dto';
import { FaIcon } from 'src/app/generic-components/fa-icon.enum';
import { Option } from 'src/app/generic-components/Option';
import { LPCEyes, LPCHair, LPCHairColor, LPCRace } from 'src/app/LPC/types/LPC-types.type';
import { Character } from 'src/app/pw/infrastructure/character/Character';
import { CharacterGenderEnum } from 'src/app/pw/infrastructure/character/enums/character-gender.enum';
import { CharacterRaceEnum } from 'src/app/pw/infrastructure/character/enums/character-race.enum';
import { NewCharacterService } from 'src/app/pw/ui/game/new-character/new-character.service';
import { CreateCharacter } from 'src/app/store/actions/character.action';
import { getCharacterError } from 'src/app/store/selectors/character.selector';
import { CharacterState } from 'src/app/store/state/character.state';
import { BaseComponent } from 'src/app/utils/base-component';

@Component({
  selector: 'pw-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.scss'],
  providers: [NewCharacterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewCharacterComponent extends BaseComponent implements OnInit {

  form: FormGroup;
  loading = false;
  faIcon = FaIcon;
  serverError: string;

  private character: Character;
  private submitted = false;
  private selectedGender: CharacterGenderEnum;
  private selectedRace: CharacterRaceEnum;
  private selectedRaceLook: LPCRace;
  private selectedHair: LPCHair;
  private selectedHairColor: LPCHairColor;
  private selectedEyes: LPCEyes;

  constructor(private readonly characterStore: Store<CharacterState>,
              private readonly changeDetectorRef: ChangeDetectorRef,
              private readonly newCharacterService: NewCharacterService) {
    super();
  }

  get isNicknameValid(): boolean {
    return !this.loading && this.submitted && this.form.get('nickname').invalid;
  }

  get formValue(): { nickname: string } {
    return this.form.value;
  }

  get isValid(): boolean {
    return !this.submitted || this.form.valid;
  }

  ngOnInit(): void {
    this.createForm();
    this.subscribeForNewCharacterErrorResponse();
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.form.disable();
    this.loading = true;
    const createCharacterDto: CreateCharacterDto = { nickname: this.formValue.nickname };
    this.characterStore.dispatch(new CreateCharacter(createCharacterDto));
  }

  setCharacterGender(gender: Option<CharacterGenderEnum>): void {
    this.selectedGender = gender.value;
    this.setCharacter();
  }

  setCharacterRace(race: Option<CharacterRaceEnum>): void {
    this.selectedRace = race.value;
    this.setCharacter();
  }

  setCharacterRaceLook(raceLook: Option<LPCRace>): void {
    this.selectedRaceLook = raceLook.value;
    this.setCharacter();
  }

  setCharacterHair(hair: Option<LPCHair>): void {
    this.selectedHair = hair.value;
    this.setCharacter();
  }

  setCharacterHairColor(hairColor: Option<LPCHairColor>): void {
    this.selectedHairColor = hairColor.value;
    this.setCharacter();
  }

  setEyes(eyes: Option<LPCEyes>): void {
    this.selectedEyes = eyes.value;
    this.setCharacter();
  }

  private setCharacter(): void {
    this.character = this.newCharacterService.createCharacter(
      this.selectedGender,
      this.selectedRace,
      this.selectedRaceLook,
      this.selectedHair,
      this.selectedHairColor,
      this.selectedEyes
    );
    this.changeDetectorRef.detectChanges();
  }

  private subscribeForNewCharacterErrorResponse(): void {
    this.characterStore.pipe(select(getCharacterError))
      .pipe(this.takeUntilDestroy())
      .subscribe(error => {
        if (this.submitted && error) {
          this.serverError = error.message;
          this.form.enable();
          this.loading = false;
          this.changeDetectorRef.detectChanges();
        }
      });
  }

  private createForm(): void {
    this.form = new FormGroup({
      nickname: new FormControl('', { validators: [Validators.required, Validators.minLength(4)] })
    }, { updateOn: 'change' });
  }

}
