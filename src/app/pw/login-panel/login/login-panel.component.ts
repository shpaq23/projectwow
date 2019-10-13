import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'pw-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.scss']
})
export class LoginPanelComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;

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

  onSubmit() {
    const fakeService = of('emitted').pipe(delay(2500));
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
