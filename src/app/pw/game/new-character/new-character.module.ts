import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiModule } from '../../../ui/ui.module';
import { NewCharacterComponent } from './new-character.component';


@NgModule({
  declarations: [NewCharacterComponent],
  imports: [
    CommonModule,
    UiModule
  ]
})
export class NewCharacterModule {
}
