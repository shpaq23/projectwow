import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/api/auth.service';
import { FaIcon } from 'src/app/generic-components/fa-icon.enum';
import { Gravity } from 'src/app/generic-components/gravity.enum';
import { RegisterForm } from 'src/app/pw/infrastructure/login-panel/register.form';
import { UserDtoConverter } from 'src/app/pw/ui/login-panel/user-dto.converter';


@Component({
  selector: 'pw-register-panel',
  templateUrl: './register-panel.component.html',
  styleUrls: ['./register-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterPanelComponent implements OnInit {

  @ViewChild('loginInput', { read: ElementRef, static: true })
  loginInput: ElementRef;

  form: FormGroup;
  loading = false;
  submitted = false;
  faIcon = FaIcon;
  gravity = Gravity;
  success = false;
  serverError = false;

  constructor(private readonly authService: AuthService,
              private readonly changeDetectorRef: ChangeDetectorRef) {
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

  get isSubmitButtonDisabled(): boolean {
    return !this.isValid || this.loading || this.success;
  }

  get isSubmitButtonClickable(): boolean {
    return !this.loading && this.isValid && !this.success;
  }

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl('', { validators: [Validators.required, Validators.email] }),
      passwordGroup: new FormGroup({
        password: new FormControl('', { validators: [Validators.required] }),
        repassword: new FormControl('', { validators: [Validators.required] }),
      }, { validators: [this.passwordValidator] }),
      creationCode: new FormControl('', { validators: [Validators.required] })
    });
    this.setFocusOnLogin();
  }

  passwordValidator(formGroup: FormGroup) {
    return (formGroup.get('password').value !== formGroup.get('repassword').value) ?
      { differentPasswords: true } :
      null;
  }

  strongPasswordValidator(formControl: FormControl) {
    const hasNumber = /\d/.test(formControl.value);
    // const hasUpper = /[A-Z]/.test(formControl.value);
    // const hasLower = /[a-z]/.test(formControl.value);
    // const valid = hasNumber && hasUpper && hasLower && formControl.value.length > 8;
    const valid = hasNumber && formControl.value.length > 8;
    if (!valid) {
      return { strongPassword: true };
    }
    return null;
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.serverError = false;
    this.loading = true;
    this.form.disable();
    console.log(this.formValue);
    this.authService.register(UserDtoConverter.createUserDto(this.formValue))
      .subscribe({
        next: () => {
          this.onSuccess();
          this.changeDetectorRef.detectChanges();
        },
        error: (err: HttpErrorResponse) => {
          this.onFailure(err.error.message);
          this.changeDetectorRef.detectChanges();
        }
      });
  }

  private setFocusOnLogin(): void {
    this.loginInput.nativeElement.focus();
  }

  private onSuccess() {
    this.loading = false;
    this.success = true;
    // this.form.reset();
    // this.form.enable();
    this.submitted = false;
  }

  private onFailure(err: any) {
    this.loading = false;
    this.serverError = err;
    this.form.enable();
    this.setFocusOnLogin();
  }

}
