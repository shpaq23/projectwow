import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterComponent } from './character/character.component';
import { NewCharacterComponent } from './new-character/new-character.component';
import { StoreModule } from '@ngrx/store';
import { characterReducer } from '../../../store/reducers/character-reducer';
import { EffectsModule } from '@ngrx/effects';
import { CharacterEffect } from '../../../store/effects/character.effect';
import { GlobalLoaderEffect } from '../../../store/effects/global-loader.effect';
import { globalLoaderReducer } from '../../../store/reducers/global-loader.reducer';
import { UiModule } from '../../../ui/ui.module';


@NgModule({
  declarations: [CharacterComponent, NewCharacterComponent],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    StoreModule.forFeature('character', characterReducer),
    StoreModule.forFeature('globalLoader', globalLoaderReducer),
    EffectsModule.forFeature([CharacterEffect, GlobalLoaderEffect]),
    UiModule
  ]
})
export class CharacterModule {
}
