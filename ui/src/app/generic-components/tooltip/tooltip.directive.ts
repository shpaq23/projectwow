import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  ViewContainerRef
} from '@angular/core';
import { Gravity } from 'src/app/generic-components/gravity.enum';
import { TooltipService } from 'src/app/generic-components/tooltip/tooltip.service';

@Directive({
  selector: '[pwTooltip]',
})
export class TooltipDirective {

  constructor(private elementRef: ElementRef,
              private viewContainer: ViewContainerRef,
              private tooltipService: TooltipService) {
  }

  @Input() gravity: Gravity = Gravity.NORTH;
  @Input() description: string;
  @Input() offset = 5;

  @HostListener('mouseenter') onMouseEnter() {
    this.tooltipService.showTooltip(this.gravity, this.description, this.elementRef, this.offset);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.tooltipService.hideTooltip();
  }


}

