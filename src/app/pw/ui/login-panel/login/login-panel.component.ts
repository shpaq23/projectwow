import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FaIcon } from '../../../../generic-components/fa-icon.enum';
import { select, Store } from '@ngrx/store';
import { UserState } from '../../../../store/state/user.state';
import { getLoggedUserError, getLoggedUserLoading } from '../../../../store/selectors/user.selector';
import { LoginUser } from '../../../../store/actions/user.action';
import { BaseComponent } from '../../../../utils/base-component';

export interface LoginForm {
  login: string;
  password: string;
}

@Component({
  selector: 'pw-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.scss']
})
export class LoginPanelComponent extends BaseComponent implements OnInit, OnDestroy {

  form: FormGroup;
  loading: boolean;
  submitted = false;
  faIcon = FaIcon;
  serverError: string;

  constructor(private userStore: Store<UserState>) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl('', {validators: [Validators.required, Validators.email]}),
      password: new FormControl('', {validators: [Validators.required]})
    }, {updateOn: 'change'});

    this.subscribeForLoginResponseError();
    this.subscribeForLoginLoading();

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
    if (this.form.invalid) {
      return;
    }
    this.form.disable();
    this.userStore.dispatch(new LoginUser(this.formValue));
  }

  private subscribeForLoginResponseError(): void {
    this.userStore.pipe(select(getLoggedUserError))
      .pipe(this.takeUntilDestroy())
      .subscribe(error => {
        if (this.submitted) {
          this.serverError = error;
        }
      });
  }

  private subscribeForLoginLoading(): void {
    this.userStore.pipe(select(getLoggedUserLoading))
      .pipe(this.takeUntilDestroy())
      .subscribe(loading => {
          this.loading = loading;
          if (!this.loading) {
            this.form.enable();
          }
        }
      );
  }

}
