import { PhaserCharacterDirection } from './PhaserCharacterDirection';
import { PhaserCharacterAnimationCreator } from '../utils/animations/PhaserCharacterAnimationCreator';

export class PhaserCharacter extends Phaser.Physics.Arcade.Sprite {

  private direction: PhaserCharacterDirection;

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
  }

  tryMoveRight(): void {
    this.characterBody.setVelocityX(64);
    this.anims.play('moveRight', true);
  }

  tryMoveUp(): void {
    this.characterBody.setVelocityY(-64);
    this.anims.play('moveUp', true);
  }

  tryMoveDown(): void {
    this.characterBody.setVelocityY(64);
    this.anims.play('moveDown', true);
  }

  stopAnimate(): void {
    this.anims.stop();
  }

  stopMove(): void {
    this.characterBody.setVelocity(0, 0);
  }



  private addAnimations(): void {
    (new PhaserCharacterAnimationCreator(this.scene.anims, this.texture.key)).createAnimations();
  }

}
