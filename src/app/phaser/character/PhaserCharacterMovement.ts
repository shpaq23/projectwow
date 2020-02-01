import { PhaserCharacter } from './PhaserCharacter';
import { PhaserCharacterDirection } from './PhaserCharacterDirection';
import { PhaserCharacterAnimationCreator } from '../utils/animations/PhaserCharacterAnimationCreator';

export class PhaserCharacterMovement {

  private moveAcceleration = 1;

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
      if (this.character.direction === PhaserCharacterDirection.LEFT) {
        this.character.isMoving = true;
        const startX = this.character.x;
        this.scene.physics.moveTo(this.character, this.character.x - 1, this.character.y, this.moveDistance);
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
        this.character.direction = PhaserCharacterDirection.LEFT;
        this.character.stopAnimate();
      }
    }
  }

  tryMoveRight(): void {
    if (!this.character.isMoving && !this.character.isAttacking) {
      if (this.character.direction === PhaserCharacterDirection.RIGHT) {
        this.character.isMoving = true;
        const startX = this.character.x;
        this.scene.physics.moveTo(this.character, this.character.x + 1, this.character.y, this.moveDistance);
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
        this.character.direction = PhaserCharacterDirection.RIGHT;
        this.character.stopAnimate();
      }
    }
  }

  tryMoveUp(): void {
    if (!this.character.isMoving && !this.character.isAttacking) {
      if (this.character.direction === PhaserCharacterDirection.UP) {
        this.character.isMoving = true;
        const startY = this.character.y;
        this.scene.physics.moveTo(this.character, this.character.x, this.character.y - 1, this.moveDistance);
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
        this.character.direction = PhaserCharacterDirection.UP;
        this.character.stopAnimate();
      }
    }
  }

  tryMoveDown(): void {
    if (!this.character.isMoving && !this.character.isAttacking) {
      if (this.character.direction === PhaserCharacterDirection.DOWN) {
        this.character.isMoving = true;
        const startY = this.character.y;
        this.scene.physics.moveTo(this.character, this.character.x, this.character.y + 1, this.moveDistance);
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
        this.character.direction = PhaserCharacterDirection.DOWN;
        this.character.stopAnimate();
      }
    }
  }

  private stopMoving(): void {
    this.character.characterBody.stop();
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
