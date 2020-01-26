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
    const attackFrameRate = 6;

    this.createAnimation(PhaserCharacterAnimationCreator.MOVE_UP_KEY, moveUpFrames, moveFrameRate, this.animationManager, this.textureKey);
    this.createAnimation(PhaserCharacterAnimationCreator.MOVE_DOWN_KEY, moveDownFrames, moveFrameRate, this.animationManager, this.textureKey);
    this.createAnimation(PhaserCharacterAnimationCreator.MOVE_LEFT_KEY, moveLeftFrames, moveFrameRate, this.animationManager, this.textureKey);
    this.createAnimation(PhaserCharacterAnimationCreator.MOVE_RIGHT_KEY, moveRightFrames, moveFrameRate, this.animationManager, this.textureKey);

    this.createAnimation(PhaserCharacterAnimationCreator.ATTACK_UP_KEY, attackUpFrames, attackFrameRate, this.animationManager, this.textureKey);
    this.createAnimation(PhaserCharacterAnimationCreator.ATTACK_DOWN_KEY, attackDownFrames, attackFrameRate, this.animationManager, this.textureKey);
    this.createAnimation(PhaserCharacterAnimationCreator.ATTACK_LEFT_KEY, attackLeftFrames, attackFrameRate, this.animationManager, this.textureKey);
    this.createAnimation(PhaserCharacterAnimationCreator.ATTACK_RIGHT_KEY, attackRightFrames, attackFrameRate, this.animationManager, this.textureKey);
  }
}
