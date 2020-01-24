import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiModule } from '../../../ui/ui.module';
import { NewCharacterComponent } from './new-character.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LookPickerComponent } from './look-picker/look-picker.component';


@NgModule({
  declarations: [NewCharacterComponent, LookPickerComponent],
  imports: [
    CommonModule,
    UiModule,
    ReactiveFormsModule,
  ]
})
export class NewCharacterModule {
}
