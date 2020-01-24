import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {CharacterState} from '../../../store/state/character.state';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FaIcon } from '../../../ui/fa-icon.enum';

@Component({
  selector: 'pw-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewCharacterComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;
  faIcon = FaIcon;
  serverError: string;

  constructor(private characterStore: Store<CharacterState>) {
  }

  ngOnInit(): void {

    this.form = new FormGroup({
      nickname: new FormControl('', {validators: [Validators.required, Validators.minLength(4)]})
    }, {updateOn: 'change'});
  }

  get isNicknameValid(): boolean {
    return !this.loading && this.submitted && this.form.get('nickname').invalid;
  }

  get formValue(): {nickname: string} {
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
    console.log('submitted succesfully');
  }

}
