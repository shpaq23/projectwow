import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { GenericComponentsModule } from 'src/app/generic-components/generic-components.module';
import { CharacterComponent } from 'src/app/pw/ui/game/character/character.component';
import { CharacterEffect } from 'src/app/store/effects/character.effect';
import { characterFeatureKey, characterReducer } from 'src/app/store/reducers/character.reducer';


@NgModule({
  declarations: [CharacterComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(characterFeatureKey, characterReducer),
    EffectsModule.forFeature([CharacterEffect]),
    GenericComponentsModule
  ]
})
export class CharacterModule {
}
