import { Component, Input } from '@angular/core';
import { Gravity } from 'src/app/generic-components/gravity.enum';
import { FaIcon } from 'src/app/generic-components/fa-icon.enum';

@Component({
  selector: 'pw-question-icon',
  template: '<fa-icon pwTooltip [description]="description" [gravity]="gravity" [icon]="faIcon"></fa-icon>',
})
export class QuestionIconComponent {

  @Input() description: string;
  @Input() gravity: Gravity = Gravity.NORTH;
  faIcon: FaIcon = FaIcon.questionCircle;
}
