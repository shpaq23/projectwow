import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPanelComponent } from './login/login-panel.component';
import { RegisterPanelComponent } from './register/register-panel.component';
import { LoginGuard } from '../../../api/guards/login.guard';


const routes: Routes = [
  {path: 'login', component: LoginPanelComponent, canActivate: [LoginGuard]},
  {path: 'register', component: RegisterPanelComponent, canActivate: [LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginPanelRoutingModule {
}
