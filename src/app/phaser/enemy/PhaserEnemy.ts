import { PhaserCustomSprite } from '../utils/sprite/PhaserCustomSprite';
import { PhaserCharacter } from '../character/PhaserCharacter';
import { PhaserEnemyMovement } from './PhaserEnemyMovement';
import { PhaserLPCAnimationFramesGenerator } from '../utils/animations/PhaserLPCAnimationFramesGenerator';

export class PhaserEnemy extends PhaserCustomSprite {

  character: PhaserCharacter;

  private aggroRange = 2;

  private readonly enemyMovement: PhaserEnemyMovement;

  constructor(scene: Phaser.Scene) {
    super(scene, 64 * 10 - 32, 64 * 6 - 32, 'enemy', PhaserLPCAnimationFramesGenerator.STAND_DOWN_FRAME);
    this.enemyMovement = new PhaserEnemyMovement(this, true);
  }

  createAnimations(): void {

  }

  stopAnimate(): void {
  }

  tryAttack(): void {
    console.log('enemy attack');
  }

  tryMoveDown(): void {
  }

  tryMoveLeft(): void {
  }

  tryMoveRight(): void {
  }

  tryMoveUp(): void {
  }

  tryMove(): void {

  }

  setCharacter(character: PhaserCharacter): void {
    this.character = character;
  }

  isCharacterInRange(): boolean {
    const moveDistance = this.enemyMovement.getMoveDistance();
    return (Math.abs(this.x - this.character.x) <= moveDistance * this.aggroRange) &&
      (Math.abs(this.y - this.character.y) <= moveDistance * this.aggroRange);
  }

  private calculateDirection(): void {
    if (this.isCharacterInRange()) {

    }

  }
}
