import { Component, Input } from '@angular/core';
import { Gravity } from '../gravity.enum';
import { FaIcon } from '../fa-icon.enum';

@Component({
  selector: 'pw-info-icon',
  template: '<fa-icon pwTooltip [description]="description" [gravity]="gravity" [icon]="faIcon"></fa-icon>',
})
export class InfoIconComponent {

  @Input() description: string;
  @Input() gravity: Gravity = Gravity.NORTH;
  faIcon: FaIcon = FaIcon.infoCircle;
}
