import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2 } from '@angular/core';
import { PhaserGame } from './utils/PhaserGame';

@Component({
  selector: 'pw-phaser',
  template: ''
})
export class PhaserComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input()
  cssClass = '';

  @Output()
  readonly gameReady = new EventEmitter();

  private phaserGame: PhaserGame;

  public constructor(private elementRef: ElementRef,
                     private renderer: Renderer2) {
  }

  public ngOnInit() {
    this.phaserGame = new PhaserGame();
  }

  public ngAfterViewInit() {
    this.elementRef.nativeElement.appendChild(this.phaserGame.canvas);
    this.renderer.addClass(this.phaserGame.canvas, this.cssClass);
    this.gameReady.emit(this.phaserGame);
  }

  public ngOnDestroy() {
    if (this.phaserGame && typeof this.phaserGame.destroy === 'function') {
      this.phaserGame.destroy(true);
    }
  }


}
