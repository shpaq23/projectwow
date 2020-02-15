import { PhaserSpriteDirection } from '../utils/sprite/PhaserSpriteDirection';
import { PhaserCharacterAnimationCreator } from './PhaserCharacterAnimationCreator';
import { PhaserCharacterMovement } from './PhaserCharacterMovement';
import { PhaserCharacterAttack } from './PhaserCharacterAttack';
import { PhaserCustomSprite } from '../utils/sprite/PhaserCustomSprite';
import { PhaserLPCAnimationFramesGenerator } from '../utils/animations/PhaserLPCAnimationFramesGenerator';
import { PhaserEnemy } from '../enemy/PhaserEnemy';

export class PhaserCharacter extends PhaserCustomSprite {


  private readonly characterMovement: PhaserCharacterMovement;

  private readonly characterAttack: PhaserCharacterAttack;

  private enemies: Array<PhaserEnemy>;


  constructor(scene: Phaser.Scene) {
    super(scene, 64 * 3 - 32, 64 * 3 - 32, 'character', PhaserLPCAnimationFramesGenerator.STAND_DOWN_FRAME);
    this.characterMovement = new PhaserCharacterMovement(this, true);
    this.characterAttack = new PhaserCharacterAttack(this);
  }

  tryMoveLeft(): void {
    this.characterMovement.tryMoveLeft();
  }

  tryMoveRight(): void {
    this.characterMovement.tryMoveRight();
  }

  tryMoveUp(): void {
    this.characterMovement.tryMoveUp();
  }

  tryMoveDown(): void {
    this.characterMovement.tryMoveDown();
  }

  tryAttack(): void {
    this.characterAttack.tryAttack();
  }

  stopAnimate(): void {
    this.anims.stop();
    if (this.direction === PhaserSpriteDirection.UP) {
      this.setFrame(PhaserLPCAnimationFramesGenerator.STAND_UP_FRAME);
    } else if (this.direction === PhaserSpriteDirection.LEFT) {
      this.setFrame(PhaserLPCAnimationFramesGenerator.STAND_LEFT_FRAME);
    } else if (this.direction === PhaserSpriteDirection.DOWN) {
      this.setFrame(PhaserLPCAnimationFramesGenerator.STAND_DOWN_FRAME);
    } else if (this.direction === PhaserSpriteDirection.RIGHT) {
      this.setFrame(PhaserLPCAnimationFramesGenerator.STAND_RIGHT_FRAME);
    }
  }

  createAnimations(): void {
    (new PhaserCharacterAnimationCreator(this.scene.anims, this.texture.key)).createAnimations();
  }

  collideEnemy(): PhaserEnemy {
    const moveDistance = this.characterMovement.getMoveDistance();
    if (this.direction === PhaserSpriteDirection.LEFT) {
      return this.enemies.find(enemySprite => enemySprite.y === this.y && enemySprite.x + moveDistance === this.x);
    } else if (this.direction === PhaserSpriteDirection.RIGHT) {
      return this.enemies.find(enemySprite => enemySprite.y === this.y && enemySprite.x - moveDistance === this.x);
    } else if (this.direction === PhaserSpriteDirection.DOWN) {
      return this.enemies.find(enemySprite => enemySprite.x === this.x && enemySprite.y - moveDistance === this.y);
    } else if (this.direction === PhaserSpriteDirection.UP) {
      return this.enemies.find(enemySprite => enemySprite.x === this.x && enemySprite.y + moveDistance === this.y);
    }
  }

  setEnemies(enemies: Array<PhaserEnemy>): void {
    this.enemies = enemies;
  }

}
