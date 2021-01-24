import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from 'src/app/pw/ui/game/game-routing.module';
import { GameComponent } from 'src/app/pw/ui/game/game.component';
import {GenericComponentsModule} from 'src/app/generic-components/generic-components.module';


@NgModule({
  declarations: [GameComponent],
  imports: [
    CommonModule,
    GameRoutingModule,
    GenericComponentsModule
  ]
})
export class GameModule { }
