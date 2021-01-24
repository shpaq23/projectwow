import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthTokenInterceptor } from 'src/app/api/interceptors/auth-token.interceptor';
import { GenericComponentsModule } from 'src/app/generic-components/generic-components.module';
import { CharacterModule } from 'src/app/pw/ui/game/character/character.module';
import { DungeonModule } from 'src/app/pw/ui/game/dungeon/dungeon.module';
import { GameModule } from 'src/app/pw/ui/game/game.module';
import { NewCharacterModule } from 'src/app/pw/ui/game/new-character/new-character.module';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { LoginPanelModule } from 'src/app/pw/ui/login-panel/login-panel.module';

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
    NewCharacterModule,
    DungeonModule,
    GameModule,
    AppRoutingModule,
    HttpClientModule,
    GenericComponentsModule,
    FontAwesomeModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
