import { PhaserCharacterDirection } from './PhaserCharacterDirection';
import { PhaserCharacterAnimationCreator } from '../utils/animations/PhaserCharacterAnimationCreator';
import { PhaserCharacterAnimationFramesGenerator } from '../utils/PhaserCharacterAnimationFramesGenerator';
import { PhaserCharacterMovement } from './PhaserCharacterMovement';

export class PhaserCharacter extends Phaser.Physics.Arcade.Sprite {


  isMoving = false;

  isAttacking = false;

  direction: PhaserCharacterDirection = PhaserCharacterDirection.DOWN;

  characterBody: Phaser.Physics.Arcade.Body;

  private readonly characterMovement: PhaserCharacterMovement;


  constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | integer) {
    super(scene, x, y, texture, frame);
    scene.physics.world.enable(this);
    scene.add.existing(this);
    this.characterBody = this.body as Phaser.Physics.Arcade.Body;
    this.addAnimations();
    this.characterMovement = new PhaserCharacterMovement(this, true);
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

  attack(): void {
    if (!this.isMoving && !this.isAttacking) {
      if (this.direction === PhaserCharacterDirection.UP) {
        this.anims.play(PhaserCharacterAnimationCreator.ATTACK_UP_KEY, true);
      } else if (this.direction === PhaserCharacterDirection.LEFT) {
        this.anims.play(PhaserCharacterAnimationCreator.ATTACK_LEFT_KEY, true);
      } else if (this.direction === PhaserCharacterDirection.DOWN) {
        this.anims.play(PhaserCharacterAnimationCreator.ATTACK_DOWN_KEY, true);
      } else if (this.direction === PhaserCharacterDirection.RIGHT) {
        this.anims.play(PhaserCharacterAnimationCreator.ATTACK_RIGHT_KEY, true);
      }
      this.isAttacking = true;
      this.scene.time.addEvent({callback: () => this.stopAttackingCallback(), delay: PhaserCharacterAnimationCreator.ATTACK_DURATION});
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

  getScene(): Phaser.Scene {
    return this.scene;
  }

  stopMove(): void {
    this.characterBody.setVelocity(0, 0);
  }

  private addAnimations(): void {
    (new PhaserCharacterAnimationCreator(this.scene.anims, this.texture.key)).createAnimations();
  }

  private stopAttackingCallback(): void {
    this.isAttacking = false;
    this.stopAnimate();
  }

}
