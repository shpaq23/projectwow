import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPanelComponent } from './login/login-panel.component';
import { RegisterPanelComponent } from './register/register-panel.component';


const routes: Routes = [
  { path: 'login', component: LoginPanelComponent },
  { path: 'register', component: RegisterPanelComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginPanelRoutingModule { }
