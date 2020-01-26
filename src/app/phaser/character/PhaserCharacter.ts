import { PhaserCharacterDirection } from './PhaserCharacterDirection';
import { PhaserCharacterAnimationCreator } from '../utils/animations/PhaserCharacterAnimationCreator';
import { PhaserCharacterAnimationFramesGenerator } from '../utils/PhaserCharacterAnimationFramesGenerator';

export class PhaserCharacter extends Phaser.Physics.Arcade.Sprite {

  private direction: PhaserCharacterDirection = PhaserCharacterDirection.DOWN;

  private characterBody: Phaser.Physics.Arcade.Body;

  private isMoving = false;
  private moveAcceleration = 1;
  private moveDistance = 64;


  constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | integer) {
    super(scene, x, y, texture, frame);
    scene.physics.world.enable(this);
    scene.add.existing(this);
    this.characterBody = this.body as Phaser.Physics.Arcade.Body;
    this.addAnimations();
  }

  tryMoveLeft(): void {
    if (!this.isMoving) {
      this.direction = PhaserCharacterDirection.LEFT;
      this.isMoving = true;
      this.scene.physics.moveTo(this, this.x - 1, this.y, this.moveDistance);
      this.anims.play(PhaserCharacterAnimationCreator.MOVE_LEFT_KEY, true);
      this.scene.time.addEvent({ callback: () => this.stopMovingCallback(), delay: 1000 / this.moveAcceleration });
    }
  }

  tryMoveRight(): void {
    if (!this.isMoving) {
      this.direction = PhaserCharacterDirection.RIGHT;
      this.isMoving = true;
      this.scene.physics.moveTo(this, this.x + 1, this.y, this.moveDistance);
      this.anims.play(PhaserCharacterAnimationCreator.MOVE_RIGHT_KEY, true);
      this.scene.time.addEvent({ callback: () => this.stopMovingCallback(), delay: 1000 / this.moveAcceleration });
    }
  }

  tryMoveUp(): void {
    if (!this.isMoving) {
      this.direction = PhaserCharacterDirection.UP;
      this.isMoving = true;
      this.scene.physics.moveTo(this, this.x, this.y - 1, this.moveDistance);
      this.anims.play(PhaserCharacterAnimationCreator.MOVE_UP_KEY, true);
      this.scene.time.addEvent({ callback: () => this.stopMovingCallback(), delay: 1000 / this.moveAcceleration });
    }
  }

  tryMoveDown(): void {
    if (!this.isMoving) {
      this.direction = PhaserCharacterDirection.DOWN;
      this.isMoving = true;
      this.scene.physics.moveTo(this, this.x, this.y + 1, this.moveDistance);
      this.anims.play(PhaserCharacterAnimationCreator.MOVE_DOWN_KEY, true);
      this.scene.time.addEvent({ callback: () => this.stopMovingCallback(), delay: 1000 / this.moveAcceleration });
    }
  }

  stopAnimate(): void {
    this.anims.stop();
    if (this.direction === PhaserCharacterDirection.UP) {
      this.setFrame(PhaserCharacterAnimationFramesGenerator.STAND_UP_FRAME);
    } else if (this.direction === PhaserCharacterDirection.LEFT) {
      this.setFrame(PhaserCharacterAnimationFramesGenerator.STAND_LEFT_FRAME);
    } else if (this.direction === PhaserCharacterDirection.DOWN) {
      this.setFrame(PhaserCharacterAnimationFramesGenerator.STAND_DOWN_FRAME);
    } else if (this.direction === PhaserCharacterDirection.RIGHT) {
      this.setFrame(PhaserCharacterAnimationFramesGenerator.STAND_RIGHT_FRAME);
    }
  }

  attack(): void {

    if (this.direction === PhaserCharacterDirection.UP) {
      this.anims.play(PhaserCharacterAnimationCreator.ATTACK_UP_KEY, true);
    } else if (this.direction === PhaserCharacterDirection.LEFT) {
      this.anims.play(PhaserCharacterAnimationCreator.ATTACK_LEFT_KEY, true);
    } else if (this.direction === PhaserCharacterDirection.DOWN) {
      this.anims.play(PhaserCharacterAnimationCreator.ATTACK_DOWN_KEY, true);
    } else if (this.direction === PhaserCharacterDirection.RIGHT) {
      this.anims.play(PhaserCharacterAnimationCreator.ATTACK_RIGHT_KEY, true);
    }

  }

  stopMove(): void {
    this.characterBody.setVelocity(0, 0);
  }

  private addAnimations(): void {
    (new PhaserCharacterAnimationCreator(this.scene.anims, this.texture.key)).createAnimations();
  }

  private stopMovingCallback(): void {
    this.characterBody.stop();
    this.isMoving = false;
    this.stopAnimate();
  }

}
