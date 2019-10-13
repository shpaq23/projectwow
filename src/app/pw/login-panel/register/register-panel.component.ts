import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'pw-register-panel',
  templateUrl: './register-panel.component.html',
  styleUrls: ['./register-panel.component.scss']
})
export class RegisterPanelComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl('', {validators: [Validators.required, Validators.email]})

      passwordGroup: new FormGroup()
      creationCode: new Form
    })
  }

}
