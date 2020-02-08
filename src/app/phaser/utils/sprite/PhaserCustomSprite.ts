import { PhaserSpriteDirection } from './PhaserSpriteDirection';

export abstract class PhaserCustomSprite extends Phaser.Physics.Arcade.Sprite {

  isMoving = false;

  isAttacking = false;

  direction: PhaserSpriteDirection = PhaserSpriteDirection.DOWN;

  spriteBody: Phaser.Physics.Arcade.Body;

  protected constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | integer) {
    super(scene, x, y, texture, frame);
    scene.physics.world.enable(this);
    scene.add.existing(this);
    this.spriteBody = this.body as Phaser.Physics.Arcade.Body;
    this.createAnimations();
  }

  abstract tryMoveLeft(): void;

  abstract tryMoveRight(): void;

  abstract tryMoveUp(): void;

  abstract tryMoveDown(): void;

  abstract tryAttack(): void;

  abstract stopAnimate(): void;

  abstract createAnimations(): void;

  getScene(): Phaser.Scene {
    return this.scene;
  }

  stopMove(): void {
    this.spriteBody.setVelocity(0, 0);
  }

}
