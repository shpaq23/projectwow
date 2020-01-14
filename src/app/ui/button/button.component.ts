import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'pw-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @HostBinding('class.disabled') @Input() disabled: boolean;

  @Input() faIconLeft: IconProp;

  @Input() faIconRight: IconProp;

  @Input() spinLeft: boolean;

  @Input() spinRight: boolean;


}
