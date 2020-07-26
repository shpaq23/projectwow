import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPanelModule } from './pw/ui/login-panel/login-panel.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { CharacterModule } from './pw/ui/game/character/character.module';
import { GenericComponentsModule } from './generic-components/generic-components.module';
import { DungeonModule } from './pw/ui/game/dungeon/dungeon.module';
import { GameModule } from './pw/ui/game/game.module';
import { NewCharacterModule } from './pw/ui/game/new-character/new-character.module';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
