import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPanelRoutingModule } from './login-panel-routing.module';
import { LoginPanelComponent } from './login/login-panel.component';
import { UiModule } from '../../ui/ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterPanelComponent } from './register/register-panel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import { userReducer } from '../../store/reducers/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffect } from '../../store/effects/user.effect';


@NgModule({
  declarations: [LoginPanelComponent, RegisterPanelComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginPanelRoutingModule,
    UiModule,
    FontAwesomeModule,
    StoreModule.forFeature('loggedUser', userReducer),
    EffectsModule.forFeature([UserEffect])
  ]
})
export class LoginPanelModule {
}
