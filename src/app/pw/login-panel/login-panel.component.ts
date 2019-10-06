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

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl('', {validators: [Validators.required, Validators.email]}),
      password: new FormControl('', {validators: [Validators.required]})
    });
    this.form.controls.password.disable();
  }

  onSubmit() {
    const fakeService = of('emitted').pipe(delay(1500));
    this.loading = true;
    fakeService
      .subscribe(data => {
      console.log(data);
      this.loading = false;
    });
  }

}
