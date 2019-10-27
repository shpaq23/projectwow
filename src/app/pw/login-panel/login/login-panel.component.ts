import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { FaIcon } from '../../../ui/fa-icon.enum';
import {select, Store} from '@ngrx/store';
import {UserState} from '../../../store/state/user.state';
import {getError, getLoading} from '../../../store/selectors/user.selector';
import {LoginUser} from '../../../store/actions/user.action';
import {takeWhile} from 'rxjs/operators';

export interface LoginForm {
  login: string;
  password: string;
}

@Component({
  selector: 'pw-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.scss']
})
export class LoginPanelComponent implements OnInit, OnDestroy {

  form: FormGroup;
  loading: boolean;
  submitted = false;
  faIcon = FaIcon;
  serverError: string;
  componentAlive = true;

  constructor(private userStore: Store<UserState>) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl('', {validators: [Validators.required, Validators.email]}),
      password: new FormControl('', {validators: [Validators.required]})
    }, {updateOn: 'change'});
    this.userStore.pipe(select(getError), takeWhile(() => this.componentAlive))
      .subscribe(error => {
        if (this.submitted) {
          this.serverError = error;
        }
      });
    this.userStore.pipe(select(getLoading), takeWhile(() => this.componentAlive))
      .subscribe(loading => {
          this.loading = loading;
          if (!this.loading) {
            this.form.enable();
          }
        }
      );
  }
  ngOnDestroy(): void {
    this.componentAlive = false;
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
    if (this.form.invalid) { return; }
    this.form.disable();
    this.userStore.dispatch(new LoginUser(this.formValue));
  }

}
