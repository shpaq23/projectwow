import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'pw-phaser',
  template: ''
})
export class PhaserComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input()
  config: Phaser.Types.Core.GameConfig;

  @Input()
  cssClass = '';

  @Output()
  readonly gameReady = new EventEmitter();

  private phaser: Phaser.Game;

  public constructor(private elementRef: ElementRef,
                     private renderer: Renderer2) {
  }

  public ngOnInit() {
    this.phaser = new Phaser.Game(this.config);
  }

  public ngAfterViewInit() {
    this.elementRef.nativeElement.appendChild(this.phaser.canvas);
    this.renderer.addClass(this.phaser.canvas, this.cssClass);
    this.gameReady.emit(this.phaser);
  }

  public ngOnDestroy() {
    if (this.phaser && typeof this.phaser.destroy === 'function') {
      this.phaser.destroy(true);
    }
  }


}
