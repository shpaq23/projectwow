import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { FaIcon } from '../../../ui/fa-icon.enum';
import {select, Store} from '@ngrx/store';
import {UserState} from '../../../store/state/user.state';
import {getLoading} from '../../../store/selectors/user.selector';
import {LoginUser} from '../../../store/actions/user.action';

export interface LoginForm {
  login: string;
  password: string;
}

@Component({
  selector: 'pw-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.scss']
})
export class LoginPanelComponent implements OnInit {
  // TODO: error must be displayed in absolute div
  form: FormGroup;
  loading: boolean;
  submitted = false;
  faIcon = FaIcon;

  constructor(private userStore: Store<UserState>) { }

  ngOnInit() {
    this.userStore.pipe(select(getLoading)).subscribe(loading => this.loading = loading);
    this.form = new FormGroup({
      login: new FormControl('', {validators: [Validators.required, Validators.email]}),
      password: new FormControl('', {validators: [Validators.required]})
    }, {updateOn: 'change'});
  }

  get isValid(): boolean {
    return !this.submitted || this.form.valid;
  }
  get isLoginInvalid(): boolean {
    return !this.loading && this.submitted && this.form.get('login').invalid;
  }
  get isPasswordInvalid(): boolean {
    return !this.loading && this.submitted && this.form.get('password').invalid;
  }
  get formValue(): LoginForm {
    return this.form.value;
  }

  onSubmit() {
    this.submitted = true;
    this.form.disable();
    if (this.form.invalid) { return; }
    this.userStore.dispatch(new LoginUser(this.formValue));
  }

}
