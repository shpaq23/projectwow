import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from 'src/app/api/guards/login/login.guard';
import { LoginPanelComponent } from 'src/app/pw/ui/login-panel/login/login-panel.component';
import { RegisterPanelComponent } from 'src/app/pw/ui/login-panel/register/register-panel.component';


const routes: Routes = [
  { path: 'login', component: LoginPanelComponent, canActivate: [LoginGuard] },
  { path: 'register', component: RegisterPanelComponent, canActivate: [LoginGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginPanelRoutingModule {
}
