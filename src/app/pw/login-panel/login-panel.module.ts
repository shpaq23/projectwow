import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPanelRoutingModule } from './login-panel-routing.module';
import { LoginPanelComponent } from './login-panel.component';
import {UiModule} from '../../ui/ui.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [LoginPanelComponent],
  exports: [
    LoginPanelComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginPanelRoutingModule,
    UiModule
  ]
})
export class LoginPanelModule { }
