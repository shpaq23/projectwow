import { PhaserCharacterDirection } from './PhaserCharacterDirection';
import { PhaserCharacterAnimationCreator } from '../utils/animations/PhaserCharacterAnimationCreator';

export class PhaserCharacter extends Phaser.Physics.Arcade.Sprite {

  private direction: PhaserCharacterDirection = PhaserCharacterDirection.DOWN;

  private characterBody: Phaser.Physics.Arcade.Body;

  constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | integer) {
    super(scene, x, y, texture, frame);
    scene.physics.world.enable(this);
    scene.add.existing(this);
    this.characterBody = this.body as Phaser.Physics.Arcade.Body;
    this.addAnimations();
  }

  tryMoveLeft(): void {
    this.characterBody.setVelocityX(-64);
    this.anims.play('moveLeft', true);
    this.direction = PhaserCharacterDirection.LEFT;
  }

  tryMoveRight(): void {
    this.characterBody.setVelocityX(64);
    this.anims.play('moveRight', true);
    this.direction = PhaserCharacterDirection.RIGHT;
  }

  tryMoveUp(): void {
    this.characterBody.setVelocityY(-64);
    this.anims.play('moveUp', true);
    this.direction = PhaserCharacterDirection.UP;
  }

  tryMoveDown(): void {
    this.characterBody.setVelocityY(64);
    this.anims.play('moveDown', true);
    this.direction = PhaserCharacterDirection.DOWN;
  }

  stopAnimate(): void {
    this.anims.stop();

    if (this.direction === PhaserCharacterDirection.UP) {
      this.setFrame(8 * 13);
    } else if (this.direction === PhaserCharacterDirection.LEFT) {
      this.setFrame(9 * 13);
    } else if (this.direction === PhaserCharacterDirection.DOWN) {
      this.setFrame(10 * 13);
    } else if (this.direction === PhaserCharacterDirection.RIGHT) {
      this.setFrame(11 * 13);
    }
  }

  attack(): void {
    if (this.direction === PhaserCharacterDirection.UP) {
      this.anims.play('attackUp', true);
    } else if (this.direction === PhaserCharacterDirection.LEFT) {
      this.anims.play('attackLeft', true);
    } else if (this.direction === PhaserCharacterDirection.DOWN) {
      this.anims.play('attackDown', true);
    } else if (this.direction === PhaserCharacterDirection.RIGHT) {
      this.anims.play('attackRight', true);
    }
  }

  stopMove(): void {
    this.characterBody.setVelocity(0, 0);
  }



  private addAnimations(): void {
    (new PhaserCharacterAnimationCreator(this.scene.anims, this.texture.key)).createAnimations();
  }

}
