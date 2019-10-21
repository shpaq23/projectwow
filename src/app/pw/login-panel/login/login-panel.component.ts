import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { FaIcon } from '../../../ui/fa-icon.enum';

@Component({
  selector: 'pw-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.scss']
})
export class LoginPanelComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;
  faIcon = FaIcon;

  constructor() { }

  ngOnInit() {
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

  onSubmit() {
    const fakeService = of('emitted login').pipe(delay(2500));
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
