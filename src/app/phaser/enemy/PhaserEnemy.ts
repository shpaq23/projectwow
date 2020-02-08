import { PhaserCustomSprite } from '../utils/sprite/PhaserCustomSprite';
import { PhaserCharacter } from '../character/PhaserCharacter';
import { PhaserEnemyMovement } from './PhaserEnemyMovement';

export class PhaserEnemy extends PhaserCustomSprite {

  character: PhaserCharacter;

  private readonly enemyMovement: PhaserEnemyMovement;


  constructor(character: PhaserCharacter, scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number) {
    super(scene, x, y, texture, frame);
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
