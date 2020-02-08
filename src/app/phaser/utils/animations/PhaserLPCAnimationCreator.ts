import { PhaserAnimationCreator } from './PhaserAnimationCreator';
import { PhaserLPCAnimationFramesGenerator } from './PhaserLPCAnimationFramesGenerator';

export abstract class PhaserLPCAnimationCreator extends PhaserAnimationCreator {

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

  protected constructor(animationManager: Phaser.Animations.AnimationManager, textureKey: string) {
    super(animationManager, textureKey, new PhaserLPCAnimationFramesGenerator());
  }

  createAnimations(): void {

    const moveUpFrames = this.animationFramesGenerator.getMoveUpAnimationFrames();
    const moveDownFrames = this.animationFramesGenerator.getMoveDownAnimationFrames();
    const moveLeftFrames = this.animationFramesGenerator.getMoveLeftAnimationFrames();
    const moveRightFrames = this.animationFramesGenerator.getMoveRightAnimationFrames();
    const moveFrameRate = 9;

    const attackUpFrames = this.animationFramesGenerator.getAttackUpAnimationFrames();
    const attackDownFrames = this.animationFramesGenerator.getAttackDownAnimationFrames();
    const attackLeftFrames = this.animationFramesGenerator.getAttackLeftAnimationFrames();
    const attackRightFrames = this.animationFramesGenerator.getAttackRightAnimation();
    const attackFrameRate = 6 * 2;

    this.createAnimation(PhaserLPCAnimationCreator.MOVE_UP_KEY, moveUpFrames,
      PhaserLPCAnimationCreator.MOVEMENT_DURATION, this.animationManager, this.textureKey);
    this.createAnimation(PhaserLPCAnimationCreator.MOVE_DOWN_KEY, moveDownFrames,
      PhaserLPCAnimationCreator.MOVEMENT_DURATION, this.animationManager, this.textureKey);
    this.createAnimation(PhaserLPCAnimationCreator.MOVE_LEFT_KEY, moveLeftFrames,
      PhaserLPCAnimationCreator.MOVEMENT_DURATION, this.animationManager, this.textureKey);
    this.createAnimation(PhaserLPCAnimationCreator.MOVE_RIGHT_KEY, moveRightFrames,
      PhaserLPCAnimationCreator.MOVEMENT_DURATION, this.animationManager, this.textureKey);

    this.createAnimation(PhaserLPCAnimationCreator.ATTACK_UP_KEY, attackUpFrames,
      PhaserLPCAnimationCreator.ATTACK_DURATION, this.animationManager, this.textureKey);
    this.createAnimation(PhaserLPCAnimationCreator.ATTACK_DOWN_KEY, attackDownFrames,
      PhaserLPCAnimationCreator.ATTACK_DURATION, this.animationManager, this.textureKey);
    this.createAnimation(PhaserLPCAnimationCreator.ATTACK_LEFT_KEY, attackLeftFrames,
      PhaserLPCAnimationCreator.ATTACK_DURATION, this.animationManager, this.textureKey);
    this.createAnimation(PhaserLPCAnimationCreator.ATTACK_RIGHT_KEY, attackRightFrames,
      PhaserLPCAnimationCreator.ATTACK_DURATION, this.animationManager, this.textureKey);
  }
}
