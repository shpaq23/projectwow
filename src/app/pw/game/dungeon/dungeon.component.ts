import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { PhaserWorldScene } from '../../../phaser/PhaserWorldScene';
import { PhaserBootScene } from '../../../phaser/PhaserBootScene';

@Component({
  selector: 'pw-dungeon',
  templateUrl: './dungeon.component.html',
  styleUrls: ['./dungeon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DungeonComponent implements OnInit {

  @HostBinding('class.pw-mt-8') marginTop = true;

  phaserConfig: Phaser.Types.Core.GameConfig;

  renderConfig: Phaser.Types.Core.RenderConfig;

  phaserGame: Phaser.Game;

  constructor() {

  }

  ngOnInit() {

    this.renderConfig = {
      pixelArt: true,
    };

    this.phaserConfig = {
      type: Phaser.AUTO,
      parent: 'content',
      width: 640,
      height: 480,
      backgroundColor: '#FFF',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0 }
        }
      },
      render: this.renderConfig,
      scene: [
        new PhaserBootScene(),
        new PhaserWorldScene()
      ]
    };

  }

  onGameReady(phaser: Phaser.Game): void {
    this.phaserGame = phaser;
    console.log(this.phaserGame);
    console.log('Game is Ready');
  }

}
