import { PhaserCharacterAnimationFramesGenerator } from './PhaserCharacterAnimationFramesGenerator';

export class PhaserAnimations {
  private readonly animationManager: Phaser.Animations.AnimationManager;
  private readonly characterAnimationFramesGenerator: PhaserCharacterAnimationFramesGenerator;

  constructor(animationManager: Phaser.Animations.AnimationManager) {
    this.animationManager = animationManager;
    this.characterAnimationFramesGenerator = new PhaserCharacterAnimationFramesGenerator();
  }

  createCharacterMoveAnimations(): void {
    const moveUpFrames = this.characterAnimationFramesGenerator.getMoveUpAnimationFrames();
    const moveDownFrames = this.characterAnimationFramesGenerator.getMoveDownAnimationFrames();
    const moveLeftFrames = this.characterAnimationFramesGenerator.getMoveLeftAnimationFrames();
    const moveRightFrames = this.characterAnimationFramesGenerator.getMoveRightAnimationFrames();
    const frameRate = 8;


    this.createAnimation('moveUp', moveUpFrames, frameRate);
    this.createAnimation('moveDown', moveDownFrames, frameRate);
    this.createAnimation('moveLeft', moveLeftFrames, frameRate);
    this.createAnimation('moveRight', moveRightFrames, frameRate);

  }

  createCharacterAttackAnimations(): void {
    const attackUpFrames = this.characterAnimationFramesGenerator.getAttackUpAnimationFrames();
    const attackDownFrames = this.characterAnimationFramesGenerator.getAttackDownAnimationFrames();
    const attackLeftFrames = this.characterAnimationFramesGenerator.getAttackLeftAnimationFrames();
    const attackRightFrames = this.characterAnimationFramesGenerator.getAttackRightAnimation();
    const frameRate = 12;

    this.createAnimation('attackUp', attackUpFrames, frameRate);
    this.createAnimation('attackDown', attackDownFrames, frameRate);
    this.createAnimation('attackLeft', attackLeftFrames, frameRate);
    this.createAnimation('attackRight', attackRightFrames, frameRate);


  }

  private createAnimation(key: string, frames: number[], frameRate: number): void {
    this.animationManager.create({
      key,
      frames: this.animationManager.generateFrameNumbers('character', {frames}),
      frameRate,
      repeat: -1
    });
  }
}
