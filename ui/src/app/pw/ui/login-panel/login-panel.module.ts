import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPanelRoutingModule } from 'src/app/pw/ui/login-panel/login-panel-routing.module';
import { LoginPanelComponent } from 'src/app/pw/ui/login-panel/login/login-panel.component';
import { GenericComponentsModule } from 'src/app/generic-components/generic-components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterPanelComponent } from 'src/app/pw/ui/login-panel/register/register-panel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import { userReducer } from 'src/app/store/reducers/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffect } from 'src/app/store/effects/user.effect';


@NgModule({
  declarations: [LoginPanelComponent, RegisterPanelComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginPanelRoutingModule,
    GenericComponentsModule,
    FontAwesomeModule,
    StoreModule.forFeature('loggedUser', userReducer),
    EffectsModule.forFeature([UserEffect])
  ]
})
export class LoginPanelModule {
}
