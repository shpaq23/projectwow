import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import {FormsModule} from '@angular/forms';

const declarations = [
  ButtonComponent,
];

@NgModule({
  declarations,
  exports: declarations,
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class UiModule { }
