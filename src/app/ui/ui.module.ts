import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { FormsModule } from '@angular/forms';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { DebounceClickDirective } from './button/debounce-click.directive';

const declarations = [
  ButtonComponent,
  DebounceClickDirective
];

@NgModule({
  declarations,
  exports: declarations,
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule
  ],
})
export class UiModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faCog);
  }
}
