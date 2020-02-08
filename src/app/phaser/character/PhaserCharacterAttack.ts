import { PhaserCharacter } from './PhaserCharacter';
import { PhaserSpriteDirection } from '../utils/sprite/PhaserSpriteDirection';
import { PhaserCharacterAnimationCreator } from './PhaserCharacterAnimationCreator';

export class PhaserCharacterAttack {

  private readonly character: PhaserCharacter;

  private readonly scene: Phaser.Scene;

  constructor(character: PhaserCharacter) {
    this.character = character;
    this.scene = this.character.getScene();
  }

  tryAttack(): void {
    if (!this.character.isMoving && !this.character.isAttacking) {
      if (this.character.direction === PhaserSpriteDirection.UP) {
        this.character.anims.play(PhaserCharacterAnimationCreator.ATTACK_UP_KEY, true);
      } else if (this.character.direction === PhaserSpriteDirection.LEFT) {
        this.character.anims.play(PhaserCharacterAnimationCreator.ATTACK_LEFT_KEY, true);
      } else if (this.character.direction === PhaserSpriteDirection.DOWN) {
        this.character.anims.play(PhaserCharacterAnimationCreator.ATTACK_DOWN_KEY, true);
      } else if (this.character.direction === PhaserSpriteDirection.RIGHT) {
        this.character.anims.play(PhaserCharacterAnimationCreator.ATTACK_RIGHT_KEY, true);
      }
      this.character.isAttacking = true;
      this.scene.time.addEvent({callback: () => this.stopAttackingCallback(), delay: PhaserCharacterAnimationCreator.ATTACK_DURATION});
    }
  }

  private stopAttackingCallback(): void {
    this.character.isAttacking = false;
    this.character.stopAnimate();
  }

}
