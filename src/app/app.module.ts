import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPanelModule } from './pw/login-panel/login-panel.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
