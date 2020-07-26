import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pw-dungeon',
  templateUrl: './dungeon.component.html',
  styleUrls: ['./dungeon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DungeonComponent {

  phaserGame: Phaser.Game;


  onGameReady(phaser: Phaser.Game): void {
    this.phaserGame = phaser;
    console.log(this.phaserGame);
    console.log('Game is Ready');
  }

}
