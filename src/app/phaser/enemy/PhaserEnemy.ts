import { PhaserCustomSprite } from '../utils/sprite/PhaserCustomSprite';
import { PhaserCharacter } from '../character/PhaserCharacter';
import { PhaserEnemyMovement } from './PhaserEnemyMovement';
import { PhaserLPCAnimationFramesGenerator } from '../utils/animations/PhaserLPCAnimationFramesGenerator';

export class PhaserEnemy extends PhaserCustomSprite {

  character: PhaserCharacter;

  private readonly enemyMovement: PhaserEnemyMovement;


  constructor(character: PhaserCharacter, scene: Phaser.Scene) {
    super(scene, 64 * 14 - 32, 64 * 3 - 32, 'enemy', PhaserLPCAnimationFramesGenerator.STAND_DOWN_FRAME);
    this.character = character;
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
}
