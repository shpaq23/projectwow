import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  EmbeddedViewRef,
  Injectable, Injector,
} from '@angular/core';
import { TooltipComponent } from './tooltip.component';
import { Gravity } from '../gravity.enum';

@Injectable()
export class TooltipService {

  private tooltipComponentRef: ComponentRef<TooltipComponent>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private appRef: ApplicationRef,
              private injector: Injector) {
  }

  showTooltip(gravity: Gravity, description: string, hostElementRef: ElementRef, offset: number) {
    this.tooltipComponentRef = this.componentFactoryResolver
      .resolveComponentFactory(TooltipComponent)
      .create(this.injector);
    this.appRef.attachView(this.tooltipComponentRef.hostView);
    this.tooltipComponentRef.instance.description = description;
    this.tooltipComponentRef.instance.gravity = gravity;
    this.tooltipComponentRef.changeDetectorRef.detectChanges();
    const domElem = (this.tooltipComponentRef.hostView as EmbeddedViewRef<TooltipComponent>)
      .rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
    this.setPosition(hostElementRef, gravity, domElem, offset);
  }

  hideTooltip() {
    this.appRef.detachView(this.tooltipComponentRef.hostView);
    this.tooltipComponentRef.destroy();
  }

  private setPosition(hostElementRef: ElementRef, gravity: Gravity, domElem: HTMLElement, offset: number) {
    const hostPos = hostElementRef.nativeElement.getBoundingClientRect();
    const tooltipPos = domElem.getBoundingClientRect();
    // const scrollYPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    // const scrollXPos = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;


    let x;
    let y;
    const tooltipArrowSize = 11; /// $tooltipArrowSize variable from css

    switch (gravity) {
      case Gravity.NORTH: {
        y = hostPos.top - tooltipPos.height - offset - tooltipArrowSize;
        x = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
        break;
      }
      case Gravity.SOUTH: {
        y = hostPos.bottom + offset + tooltipArrowSize;
        x = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
        break;
      }
      case Gravity.WEST: {
        y = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
        x = hostPos.left - tooltipPos.width - offset - tooltipArrowSize;
        break;
      }
      case Gravity.EAST: {
        y = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
        x = hostPos.right + offset + tooltipArrowSize;
        break;
      }
    }
    this.tooltipComponentRef.instance.top = `${y + scrollY}px`;
    this.tooltipComponentRef.instance.left = `${x + scrollX}px`;
  }
}
