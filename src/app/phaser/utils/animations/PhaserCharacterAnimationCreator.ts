import { PhaserCharacterAnimationFramesGenerator } from '../PhaserCharacterAnimationFramesGenerator';
import { PhaserAnimationCreator } from './PhaserAnimationCreator';

export class PhaserCharacterAnimationCreator extends PhaserAnimationCreator {

  static MOVE_UP_KEY = 'moveUp';
  static MOVE_DOWN_KEY = 'moveDown';
  static MOVE_LEFT_KEY = 'moveLeft';
  static MOVE_RIGHT_KEY = 'moveRight';

  static ATTACK_UP_KEY = 'attackUp';
  static ATTACK_DOWN_KEY = 'attackDown';
  static ATTACK_LEFT_KEY = 'attackLeft';
  static ATTACK_RIGHT_KEY = 'attackRight';

  static MOVEMENT_DURATION = 1000;
  static ATTACK_DURATION = 500;

  constructor(animationManager: Phaser.Animations.AnimationManager, textureKey: string) {
    super(animationManager, textureKey);
  }

  createAnimations(): void {

    const characterFramesGenerator = new PhaserCharacterAnimationFramesGenerator();

    const moveUpFrames = characterFramesGenerator.getMoveUpAnimationFrames();
    const moveDownFrames = characterFramesGenerator.getMoveDownAnimationFrames();
    const moveLeftFrames = characterFramesGenerator.getMoveLeftAnimationFrames();
    const moveRightFrames = characterFramesGenerator.getMoveRightAnimationFrames();
    const moveFrameRate = 9;

    const attackUpFrames = characterFramesGenerator.getAttackUpAnimationFrames();
    const attackDownFrames = characterFramesGenerator.getAttackDownAnimationFrames();
    const attackLeftFrames = characterFramesGenerator.getAttackLeftAnimationFrames();
    const attackRightFrames = characterFramesGenerator.getAttackRightAnimation();
    const attackFrameRate = 6 * 2;

    this.createAnimation(PhaserCharacterAnimationCreator.MOVE_UP_KEY, moveUpFrames,
      PhaserCharacterAnimationCreator.MOVEMENT_DURATION, this.animationManager, this.textureKey);
    this.createAnimation(PhaserCharacterAnimationCreator.MOVE_DOWN_KEY, moveDownFrames,
      PhaserCharacterAnimationCreator.MOVEMENT_DURATION, this.animationManager, this.textureKey);
    this.createAnimation(PhaserCharacterAnimationCreator.MOVE_LEFT_KEY, moveLeftFrames,
      PhaserCharacterAnimationCreator.MOVEMENT_DURATION, this.animationManager, this.textureKey);
    this.createAnimation(PhaserCharacterAnimationCreator.MOVE_RIGHT_KEY, moveRightFrames,
      PhaserCharacterAnimationCreator.MOVEMENT_DURATION, this.animationManager, this.textureKey);

    this.createAnimation(PhaserCharacterAnimationCreator.ATTACK_UP_KEY, attackUpFrames,
      PhaserCharacterAnimationCreator.ATTACK_DURATION, this.animationManager, this.textureKey);
    this.createAnimation(PhaserCharacterAnimationCreator.ATTACK_DOWN_KEY, attackDownFrames,
      PhaserCharacterAnimationCreator.ATTACK_DURATION, this.animationManager, this.textureKey);
    this.createAnimation(PhaserCharacterAnimationCreator.ATTACK_LEFT_KEY, attackLeftFrames,
      PhaserCharacterAnimationCreator.ATTACK_DURATION, this.animationManager, this.textureKey);
    this.createAnimation(PhaserCharacterAnimationCreator.ATTACK_RIGHT_KEY, attackRightFrames,
      PhaserCharacterAnimationCreator.ATTACK_DURATION, this.animationManager, this.textureKey);
  }
}
