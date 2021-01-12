import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { FormsModule } from '@angular/forms';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faArrowLeft,
  faArrowRight,
  faCog,
  faInfoCircle,
  faQuestionCircle,
  faChevronRight,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons';
import { DebounceClickDirective } from './button/debounce-click.directive';
import { TooltipDirective } from './tooltip/tooltip.directive';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipService } from './tooltip/tooltip.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionIconComponent } from './icons/question-icon/question-icon.component';
import { InfoIconComponent } from './icons/info-icon/info-icon.component';
import { GlobalLoaderComponent } from './global-loader/global-loader.component';
import { ArrowListSelectorComponent } from './arrow-list-selector/arrow-list-selector.component';

const declarations = [
  ButtonComponent,
  DebounceClickDirective,
  TooltipDirective,
  TooltipComponent,
  QuestionIconComponent,
  InfoIconComponent,
  GlobalLoaderComponent,
  ArrowListSelectorComponent
];

@NgModule({
  declarations,
  exports: declarations,
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [TooltipService]
})
export class GenericComponentsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faCog, faArrowRight, faArrowLeft, faInfoCircle, faQuestionCircle, faChevronRight, faChevronLeft);
  }
}
