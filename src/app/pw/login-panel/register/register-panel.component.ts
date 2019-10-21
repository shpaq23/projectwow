import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {FaIcon} from '../../../ui/fa-icon.enum';
import {Gravity} from '../../../ui/gravity.enum';

@Component({
  selector: 'pw-register-panel',
  templateUrl: './register-panel.component.html',
  styleUrls: ['./register-panel.component.scss']
})
export class RegisterPanelComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;
  faIcon = FaIcon;
  gravity = Gravity;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl('', {validators: [Validators.required, Validators.email]}),
      passwordGroup: new FormGroup({
        password: new FormControl('', {validators: [Validators.required]}),
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

  onSubmit() {
    console.log(this.form);
    const fakeService = of('emitted register').pipe(delay(2500));
    this.submitted = true;
    if (this.form.invalid) { return; }
    this.loading = true;
    this.form.disable();
    fakeService
      .subscribe(data => {
        console.log(data);
        this.loading = false;
        this.form.enable();
      });
  }

}
