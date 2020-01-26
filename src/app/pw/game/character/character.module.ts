import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterComponent } from './character.component';
import { StoreModule } from '@ngrx/store';
import { characterReducer } from '../../../store/reducers/character.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CharacterEffect } from '../../../store/effects/character.effect';
import { GlobalLoaderEffect } from '../../../store/effects/global-loader.effect';
import { globalLoaderReducer } from '../../../store/reducers/global-loader.reducer';
import { UiModule } from '../../../ui/ui.module';


@NgModule({
  declarations: [CharacterComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('character', characterReducer),
    StoreModule.forFeature('globalLoader', globalLoaderReducer),
    EffectsModule.forFeature([CharacterEffect, GlobalLoaderEffect]),
    UiModule
  ]
})
export class CharacterModule {
}
