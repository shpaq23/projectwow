import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'pw-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

  @HostBinding('class.disabled') @Input() disabled: boolean;

  @Input() faIconLeft: IconProp;

  @Input() faIconRight: IconProp;

  @Input() spinLeft: boolean;

  @Input() spinRight: boolean;

}
