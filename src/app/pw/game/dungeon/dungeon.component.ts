import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PhaserMainScene } from '../../../phaser/PhaserMainScene';

@Component({
  selector: 'pw-dungeon',
  templateUrl: './dungeon.component.html',
  styleUrls: ['./dungeon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DungeonComponent implements OnInit {

  phaserConfig: Phaser.Types.Core.GameConfig;

  phaserGame: Phaser.Game;

  constructor() {

  }

  ngOnInit() {
    this.phaserConfig = {
      type: Phaser.AUTO,
      height: 600,
      width: 800,
      scene: [PhaserMainScene],
      parent: 'gameContainer',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: {y: 100}
        }
      }
    };

  }

  onGameReady(phaser: Phaser.Game): void {
    this.phaserGame = phaser;
    console.log('Game is Ready');
    console.log(this.phaserGame);
  }

}
