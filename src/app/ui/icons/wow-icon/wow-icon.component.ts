import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { WowIcon } from './wow-icon.enum';

@Component({
  selector: 'pw-wow-icon',
  templateUrl: './wow-icon.component.html',
  styleUrls: ['./wow-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WowIconComponent {

  @Input() wowIcon = WowIcon;

  @HostBinding('class.disabled') @Input() disabled = false;

  @HostBinding('class.faded') @Input() faded = false;
}
