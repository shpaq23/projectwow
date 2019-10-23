import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FaIcon } from '../../../ui/fa-icon.enum';
import { Gravity } from '../../../ui/gravity.enum';
import { AuthService } from '../../../api/services/auth.service';

export interface RegisterForm {
  login: string;
  password: string;
  creationCode: string;
}

@Component({
  selector: 'pw-register-panel',
  templateUrl: './register-panel.component.html',
  styleUrls: ['./register-panel.component.scss']
})
export class RegisterPanelComponent implements OnInit {

  // TODO: onSuccess & onFailure displays & errors in absolute div
  form: FormGroup;
  loading = false;
  submitted = false;
  faIcon = FaIcon;
  gravity = Gravity;
  success = false;
  error = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl('', {validators: [Validators.required, Validators.email]}),
      passwordGroup: new FormGroup({
        password: new FormControl('', {validators: [Validators.required, this.strongPasswordValidator]}),
        repassword: new FormControl('', {validators: [Validators.required]}),
      }, {validators: [this.passwordValidator]}),
      creationCode: new FormControl('', {validators: [Validators.required]})
    });
  }

  passwordValidator(formGroup: FormGroup) {
    return (formGroup.get('password').value !== formGroup.get('repassword').value) ?
      {differentPasswords: true} :
      null;
  }
  strongPasswordValidator(formControl: FormControl) {
    const hasNumber = /\d/.test(formControl.value);
    const hasUpper = /[A-Z]/.test(formControl.value);
    const hasLower = /[a-z]/.test(formControl.value);
    const valid = hasNumber && hasUpper && hasLower && formControl.value.length > 8;
    if (!valid) { return { strongPassword: true }; }
    return null;
  }

  get isValid(): boolean {
    return !this.submitted || this.form.valid;
  }
  get isLoginInvalid(): boolean {
    return !this.loading && this.submitted && this.form.get('login').invalid;
  }
  get isPasswordInvalid(): boolean {
    return !this.loading && this.submitted && this.form.get('passwordGroup').get('password').invalid;
  }
  get isRePasswordInvalid(): boolean {
    return !this.loading && this.submitted && this.form.get('passwordGroup').hasError('differentPasswords');
  }
  get isCreationCodeInvalid(): boolean {
    return !this.loading && this.submitted && this.form.get('creationCode').invalid;
  }
  get formValue(): RegisterForm {
    return {
      login: this.form.get('login').value,
      password: this.form.get('passwordGroup').get('password').value,
      creationCode: this.form.get('creationCode').value
    };
  }
  private onSuccess() {
    this.loading = false;
    this.success = true;
    this.form.reset();
    this.form.enable();
    this.submitted = false;
  }
  private onFailure(err: any) {
    this.loading = false;
    this.error = err;
    this.form.enable();
  }
  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) { return; }
    this.loading = true;
    this.form.disable();
    this.authService.register(this.formValue)
      .subscribe({
        next: data => {
          this.onSuccess();
          console.log(data);
        },
        error: err => {
         this.onFailure(err);
        }
      });
  }

}
