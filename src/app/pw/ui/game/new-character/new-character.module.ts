import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenericComponentsModule } from 'src/app/generic-components/generic-components.module';
import { NewCharacterComponent } from 'src/app/pw/ui/game/new-character/new-character.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [NewCharacterComponent],
  imports: [
    CommonModule,
    GenericComponentsModule,
    ReactiveFormsModule,
  ]
})
export class NewCharacterModule {
}
