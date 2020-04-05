import { PhaserCharacter } from './PhaserCharacter';
import { PhaserSpriteDirection } from '../utils/sprite/PhaserSpriteDirection';
import { PhaserCharacterAnimationCreator } from './PhaserCharacterAnimationCreator';

export class PhaserCharacterMovement {

  private moveAcceleration = 2;

  private moveDistance = 64;

  private readonly withLogger: boolean;

  private readonly character: PhaserCharacter;

  private readonly scene: Phaser.Scene;

  constructor(character: PhaserCharacter, withLoggers = false) {
    this.character = character;
    this.withLogger = withLoggers;
    this.scene = this.character.getScene();
  }

  tryMoveLeft(): void {
    if (!this.character.isMoving && !this.character.isAttacking) {
      if (this.character.direction === PhaserSpriteDirection.LEFT && !this.character.collideEnemy()) {
        this.character.isMoving = true;
        const startX = this.character.x;
        this.scene.physics.moveTo(this.character, this.character.x - 1, this.character.y, this.moveDistance * this.moveAcceleration);
        this.character.anims.play(PhaserCharacterAnimationCreator.MOVE_LEFT_KEY, true);
        this.scene.time.addEvent({
          callback: () => {
            this.stopMoving();
            if (this.character.x !== startX) {
              this.character.x = startX - this.moveDistance;
            }
          },
          delay: PhaserCharacterAnimationCreator.MOVEMENT_DURATION / this.moveAcceleration
        });
        this.logCharacterPosition();
      } else {
        this.character.direction = PhaserSpriteDirection.LEFT;
        this.character.stopAnimate();
      }
    }
  }

  tryMoveRight(): void {
    if (!this.character.isMoving && !this.character.isAttacking) {
      if (this.character.direction === PhaserSpriteDirection.RIGHT && !this.character.collideEnemy()) {
        this.character.isMoving = true;
        const startX = this.character.x;
        this.scene.physics.moveTo(this.character, this.character.x + 1, this.character.y, this.moveDistance * this.moveAcceleration);
        this.character.anims.play(PhaserCharacterAnimationCreator.MOVE_RIGHT_KEY, true);
        this.scene.time.addEvent({
          callback: () => {
            this.stopMoving();
            if (this.character.x !== startX) {
              this.character.x = startX + this.moveDistance;
            }
          },
          delay: PhaserCharacterAnimationCreator.MOVEMENT_DURATION / this.moveAcceleration
        });
        this.logCharacterPosition();
      } else {
        this.character.direction = PhaserSpriteDirection.RIGHT;
        this.character.stopAnimate();
      }
    }
  }

  tryMoveUp(): void {
    if (!this.character.isMoving && !this.character.isAttacking) {
      if (this.character.direction === PhaserSpriteDirection.UP && !this.character.collideEnemy()) {
        this.character.isMoving = true;
        const startY = this.character.y;
        this.scene.physics.moveTo(this.character, this.character.x, this.character.y - 1, this.moveDistance * this.moveAcceleration);
        this.character.anims.play(PhaserCharacterAnimationCreator.MOVE_UP_KEY, true);
        this.scene.time.addEvent({
          callback: () => {
            this.stopMoving();
            if (this.character.y !== startY) {
              this.character.y = startY - this.moveDistance;
            }
          },
          delay: PhaserCharacterAnimationCreator.MOVEMENT_DURATION / this.moveAcceleration
        });
        this.logCharacterPosition();
      } else {
        this.character.direction = PhaserSpriteDirection.UP;
        this.character.stopAnimate();
      }
    }
  }

  tryMoveDown(): void {
    if (!this.character.isMoving && !this.character.isAttacking) {
      if (this.character.direction === PhaserSpriteDirection.DOWN && !this.character.collideEnemy()) {
        this.character.isMoving = true;
        const startY = this.character.y;
        this.scene.physics.moveTo(this.character, this.character.x, this.character.y + 1, this.moveDistance * this.moveAcceleration);
        this.character.anims.play(PhaserCharacterAnimationCreator.MOVE_DOWN_KEY, true);
        this.scene.time.addEvent({
          callback: () => {
            this.stopMoving();
            if (this.character.y !== startY) {
              this.character.y = startY + this.moveDistance;
            }
          },
          delay: PhaserCharacterAnimationCreator.MOVEMENT_DURATION / this.moveAcceleration
        });
        this.logCharacterPosition();
      } else {
        this.character.direction = PhaserSpriteDirection.DOWN;
        this.character.stopAnimate();
      }
    }
  }

  getMoveDistance(): number {
    return this.moveDistance;
  }


  private stopMoving(): void {
    this.character.spriteBody.stop();
    this.character.isMoving = false;
    this.character.stopAnimate();
  }

  private logCharacterPosition(): void {
    if (this.withLogger) {
      console.log('Character X:', this.character.x);
      console.log('Character Y:', this.character.y);
    }
  }

}