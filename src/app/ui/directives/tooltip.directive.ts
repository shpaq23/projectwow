import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';
import {Gravity} from '../gravity.enum';

@Directive({
  selector: '[pwTooltip]',
})
export class TooltipDirective {

  constructor(private elementRef: ElementRef,
              private renderer2: Renderer2) { }

  @Input() gravity: Gravity = Gravity.NORTH;
  @Input() description: string;
  tooltipElement: HTMLElement;
  offset = 10;
  @HostListener('mouseenter') onMouseEnter() {
    this.showTooltip();
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.hideTooltip();
  }

  showTooltip() {
    this.createTooltip();
    this.setPosition();
  }
  hideTooltip() {
    this.renderer2.removeChild(document.body, this.tooltipElement);
  }

  createTooltip() {
    this.tooltipElement = this.renderer2.createElement('span');
    this.renderer2.appendChild(this.tooltipElement, this.renderer2.createText(this.description));
    this.renderer2.addClass(this.tooltipElement, 'pw-tooltip');
    this.renderer2.addClass(this.tooltipElement, `${this.gravity}`);
    this.renderer2.appendChild(document.body, this.tooltipElement);
  }

  setPosition() {
    const hostPos = this.elementRef.nativeElement.getBoundingClientRect();
    const tooltipPos = this.tooltipElement.getBoundingClientRect();
    const scrollYPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const scrollXPos = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;

    let x;
    let y;
    switch (this.gravity) {
      case Gravity.NORTH: {
        y = hostPos.top - tooltipPos.height - this.offset;
        x = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
        break;
      }
      case Gravity.SOUTH: {
        y = hostPos.bottom + this.offset;
        x = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
        break;
      }
      case Gravity.WEST: {
        y = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
        x = hostPos.left - tooltipPos.width - this.offset;
        break;
      }
      case Gravity.EAST: {
        y = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
        x = hostPos.right + this.offset;
        break;
      }
    }
    this.renderer2.setStyle(this.tooltipElement, 'top', `${y + scrollYPos}px`);
    this.renderer2.setStyle(this.tooltipElement, 'left', `${x + scrollXPos}px`);
  }
}

