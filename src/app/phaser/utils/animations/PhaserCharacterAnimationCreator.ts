import { PhaserCharacterAnimationFramesGenerator } from '../PhaserCharacterAnimationFramesGenerator';
import { PhaserAnimationCreator } from './PhaserAnimationCreator';

export class PhaserCharacterAnimationCreator extends PhaserAnimationCreator {

  constructor(animationManager: Phaser.Animations.AnimationManager, textureKey: string) {
    super(animationManager, textureKey);
  }

  createAnimations(): void {

    const characterFramesGenerator = new PhaserCharacterAnimationFramesGenerator();

    const moveUpFrames = characterFramesGenerator.getMoveUpAnimationFrames();
    const moveDownFrames = characterFramesGenerator.getMoveDownAnimationFrames();
    const moveLeftFrames = characterFramesGenerator.getMoveLeftAnimationFrames();
    const moveRightFrames = characterFramesGenerator.getMoveRightAnimationFrames();
    const moveFrameRate = 8;

    const attackUpFrames = characterFramesGenerator.getAttackUpAnimationFrames();
    const attackDownFrames = characterFramesGenerator.getAttackDownAnimationFrames();
    const attackLeftFrames = characterFramesGenerator.getAttackLeftAnimationFrames();
    const attackRightFrames = characterFramesGenerator.getAttackRightAnimation();
    const attackFrameRate = 12;

    this.createAnimation('moveUp', moveUpFrames, moveFrameRate, this.animationManager, this.textureKey);
    this.createAnimation('moveDown', moveDownFrames, moveFrameRate, this.animationManager, this.textureKey);
    this.createAnimation('moveLeft', moveLeftFrames, moveFrameRate, this.animationManager, this.textureKey);
    this.createAnimation('moveRight', moveRightFrames, moveFrameRate, this.animationManager, this.textureKey);

    this.createAnimation('attackUp', attackUpFrames, attackFrameRate, this.animationManager, this.textureKey);
    this.createAnimation('attackDown', attackDownFrames, attackFrameRate, this.animationManager, this.textureKey);
    this.createAnimation('attackLeft', attackLeftFrames, attackFrameRate, this.animationManager, this.textureKey);
    this.createAnimation('attackRight', attackRightFrames, attackFrameRate, this.animationManager, this.textureKey);
  }
}
