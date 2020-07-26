import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import {GenericComponentsModule} from '../../../generic-components/generic-components.module';


@NgModule({
  declarations: [GameComponent],
  imports: [
    CommonModule,
    GameRoutingModule,
    GenericComponentsModule
  ]
})
export class GameModule { }
