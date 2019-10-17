import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  ViewContainerRef
} from '@angular/core';
import {Gravity} from '../gravity.enum';
import {TooltipService} from './tooltip.service';

@Directive({
  selector: '[pwTooltip]',
})
export class TooltipDirective {

  constructor(private elementRef: ElementRef,
              private viewContainer: ViewContainerRef,
              private tooltipService: TooltipService) { }
  @Input() gravity: Gravity = Gravity.NORTH;
  @Input() description: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.tooltipService.showTooltip(this.gravity, this.description, this.elementRef);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.tooltipService.hideTooltip();
  }


}

