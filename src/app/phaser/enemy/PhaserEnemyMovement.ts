import { PhaserEnemy } from './PhaserEnemy';

export class PhaserEnemyMovement {

  private moveAcceleration = 2;

  private moveDistance = 64;

  private readonly withLogger: boolean;

  private readonly enemy: PhaserEnemy;

  private readonly scene: Phaser.Scene;

  constructor(enemy: PhaserEnemy, withLoggers = false) {
    this.enemy = enemy;
    this.withLogger = withLoggers;
    this.scene = this.enemy.getScene();
  }


  tryMove(): void {

  }

  getMoveDistance(): number {
    return this.moveDistance;
  }


  private stopMoving(): void {
    this.enemy.spriteBody.stop();
    this.enemy.isMoving = false;
    this.enemy.stopAnimate();
  }

  private logCharacterPosition(): void {
    if (this.withLogger) {
      console.log('Character X:', this.enemy.x);
      console.log('Character Y:', this.enemy.y);
    }
  }

}
