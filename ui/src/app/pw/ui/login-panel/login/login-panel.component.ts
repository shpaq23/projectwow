import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FaIcon } from 'src/app/generic-components/fa-icon.enum';
import { LoginForm } from 'src/app/pw/infrastructure/login-panel/login-form';
import { UserDtoConverter } from 'src/app/pw/ui/login-panel/user-dto.converter';
import { UserCommands } from 'src/app/store/commands/user.commands';
import { UserRepository } from 'src/app/store/repositories/user.repository';
import { BaseComponent } from 'src/app/utils/base-component';

@Component({
  selector: 'pw-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPanelComponent extends BaseComponent implements OnInit, OnDestroy {

  @ViewChild('loginInput', { read: ElementRef, static: true })
  loginInput: ElementRef;

  form: FormGroup;
  loading: boolean;
  submitted = false;
  faIcon = FaIcon;
  serverError: string;

  constructor(private readonly userRepository: UserRepository,
              private readonly userCommands: UserCommands,
              private readonly changeDetectorRef: ChangeDetectorRef) {
    super();
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

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl('', { validators: [Validators.required, Validators.email] }),
      password: new FormControl('', { validators: [Validators.required] })
    }, { updateOn: 'change' });

    this.setFocusOnLogin();
    this.subscribeForLoginResponseError();
    this.subscribeForLoginLoading();

  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.form.disable();
    this.userCommands.loginUser(UserDtoConverter.loginUserDto(this.formValue));
  }

  private setFocusOnLogin(): void {
    this.loginInput.nativeElement.focus();
  }

  private subscribeForLoginResponseError(): void {
    this.userRepository.getUserError()
      .pipe(this.takeUntilDestroy())
      .subscribe(error => {
        if (this.submitted) {
          this.serverError = error.message;
          this.changeDetectorRef.detectChanges();
        }
      });
  }

  private subscribeForLoginLoading(): void {
    this.userRepository.getUserLoading()
      .pipe(this.takeUntilDestroy())
      .subscribe(loading => {
          this.loading = loading;
          if (!this.loading) {
            this.form.enable();
            this.setFocusOnLogin();
            this.changeDetectorRef.detectChanges();
          }
        }
      );
  }

}
