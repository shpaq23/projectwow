import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

export interface WowSimpleIcon {
  name: string;
  icon: string;
}

@Component({
  selector: 'pw-wow-icon',
  templateUrl: './wow-icon.component.html',
  styleUrls: ['./wow-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WowIconComponent {

  @Input() iconUrl: string;

  @Input() description: string;

  @HostBinding('class.disabled') @Input() disabled = false;

  @HostBinding('class.faded') @Input() faded = false;
}
