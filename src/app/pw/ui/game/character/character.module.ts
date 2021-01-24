import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CharacterUpdateEffect } from 'src/app/store/effects/character-update.effect';
import { characterReducer } from 'src/app/store/reducers/character.reducer';
import { GenericComponentsModule } from 'src/app/generic-components/generic-components.module';
import { CharacterEffect } from 'src/app/store/effects/character.effect';
import { GlobalLoaderEffect } from 'src/app/store/effects/global-loader.effect';
import { globalLoaderReducer } from 'src/app/store/reducers/global-loader.reducer';
import { CharacterComponent } from 'src/app/pw/ui/game/character/character.component';


@NgModule({
  declarations: [CharacterComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('character', characterReducer),
    StoreModule.forFeature('globalLoader', globalLoaderReducer),
    EffectsModule.forFeature([CharacterEffect, CharacterUpdateEffect, GlobalLoaderEffect]),
    GenericComponentsModule
  ]
})
export class CharacterModule {
}
