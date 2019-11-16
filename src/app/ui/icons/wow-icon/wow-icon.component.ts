import { ChangeDetectionStrategy, Component, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';

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
export class WowIconComponent implements OnChanges {

  @Input() iconUrl: string;

  @Input() description: string;

  @HostBinding('class.disabled') @Input() disabled = false;

  @HostBinding('class.active') @Input() active = false;

  @HostBinding('class.faded') @Input() faded = false;

  alt: string;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.iconUrl) {
      this.alt = this.iconUrl;
      this.iconUrl = `assets/icons/${this.iconUrl}.png`;
    }
  }
}
