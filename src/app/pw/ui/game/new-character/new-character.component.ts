import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { CreateCharacterDto } from 'src/app/api/dtos/character/create-character.dto';
import { FaIcon } from 'src/app/generic-components/fa-icon.enum';
import { Character } from 'src/app/pw/infrastructure/character/Character';
import { ClearErrorMessage, CreateCharacter } from 'src/app/store/actions/character.action';
import { getCharacterError } from 'src/app/store/selectors/character.selector';
import { CharacterState } from 'src/app/store/state/character.state';
import { BaseComponent } from 'src/app/utils/base-component';

@Component({
  selector: 'pw-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewCharacterComponent extends BaseComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;
  faIcon = FaIcon;
  serverError: string;

  private character: Character;

  constructor(private characterStore: Store<CharacterState>,
              private changeDetectorRef: ChangeDetectorRef) {
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
    const createCharacterDto: CreateCharacterDto = { look: this.character.getLook(), nickname: this.formValue.nickname };
    this.characterStore.dispatch(new CreateCharacter(createCharacterDto));
  }

  setCharacter(character: Character): void {
    this.character = character;
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
