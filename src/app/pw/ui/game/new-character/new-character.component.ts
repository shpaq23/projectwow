import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CharacterState } from '../../../../store/state/character.state';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FaIcon } from '../../../../generic-components/fa-icon.enum';
import { ClearErrorMessage, CreateNewCharacter } from '../../../../store/actions/character.action';
import { getCharacterError } from '../../../../store/selectors/character.selector';
import { BaseComponent } from '../../../../utils/base-component';

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

  constructor(private characterStore: Store<CharacterState>,
              private changeDetectorRef: ChangeDetectorRef) {
    super();
  }

  ngOnInit(): void {
    this.createForm();
    this.subscribeForNewCharacterErrorResponse();
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

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.form.disable();
    this.loading = true;
    this.characterStore.dispatch(new ClearErrorMessage());
    this.characterStore.dispatch(new CreateNewCharacter(this.formValue));
  }

  private subscribeForNewCharacterErrorResponse(): void {
    this.characterStore.pipe(select(getCharacterError))
      .pipe(this.takeUntilDestroy())
      .subscribe(error => {
        if (this.submitted && error) {
          this.serverError = error;
          this.form.enable();
          this.loading = false;
          this.changeDetectorRef.detectChanges();
        }
      });
  }

  private createForm(): void {
    this.form = new FormGroup({
      nickname: new FormControl('', {validators: [Validators.required, Validators.minLength(4)]})
    }, {updateOn: 'change'});
  }

}
