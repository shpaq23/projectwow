import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { Gravity } from '../gravity.enum';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'pw-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void<=>*', animate(300)),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent {

  @HostBinding('style.top') top = '0px';
  @HostBinding('style.left') left = '0px';
  @HostBinding('class.pw-p-3') padding = true;
  @HostBinding('@fadeInOut') fadeInOut = true;
  @Input() description: string;
  @Input() gravity: Gravity;

}
