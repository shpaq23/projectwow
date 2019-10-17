import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { FormsModule } from '@angular/forms';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faArrowRight, faCog } from '@fortawesome/free-solid-svg-icons';
import { DebounceClickDirective } from './button/debounce-click.directive';
import { TooltipDirective } from './tooltip/tooltip.directive';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipService } from './tooltip/tooltip.service';

const declarations = [
  ButtonComponent,
  DebounceClickDirective,
  TooltipDirective,
  TooltipComponent
];

@NgModule({
  declarations,
  exports: declarations,
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule
  ],
  entryComponents: [ TooltipComponent ],
  providers: [ TooltipService ]
})
export class UiModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faCog, faArrowRight, faArrowLeft);
  }
}
