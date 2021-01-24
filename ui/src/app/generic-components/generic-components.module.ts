import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from 'src/app/generic-components/button/button.component';
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
import { DebounceClickDirective } from 'src/app/generic-components/button/debounce-click.directive';
import { TooltipDirective } from 'src/app/generic-components/tooltip/tooltip.directive';
import { TooltipComponent } from 'src/app/generic-components/tooltip/tooltip.component';
import { TooltipService } from 'src/app/generic-components/tooltip/tooltip.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionIconComponent } from 'src/app/generic-components/icons/question-icon/question-icon.component';
import { InfoIconComponent } from 'src/app/generic-components/icons/info-icon/info-icon.component';
import { GlobalLoaderComponent } from 'src/app/generic-components/global-loader/global-loader.component';
import { ArrowListSelectorComponent } from 'src/app/generic-components/arrow-list-selector/arrow-list-selector.component';

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
