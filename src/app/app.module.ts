import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPanelModule } from './pw/login-panel/login-panel.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { CharacterModule } from './pw/character/character.module';
import { UiModule } from './ui/ui.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'projectwow',
      logOnly: environment.production
    }),
    LoginPanelModule,
    CharacterModule,
    AppRoutingModule,
    HttpClientModule,
    UiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
