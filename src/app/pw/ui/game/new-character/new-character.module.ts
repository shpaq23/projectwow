import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenericComponentsModule } from '../../../../generic-components/generic-components.module';
import { NewCharacterComponent } from './new-character.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LookPickerComponent } from './look-picker/look-picker.component';


@NgModule({
  declarations: [NewCharacterComponent, LookPickerComponent],
  imports: [
    CommonModule,
    GenericComponentsModule,
    ReactiveFormsModule,
  ]
})
export class NewCharacterModule {
}
