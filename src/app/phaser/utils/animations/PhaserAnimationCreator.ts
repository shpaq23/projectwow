import { PhaserCharacterAnimationFramesGenerator } from '../PhaserCharacterAnimationFramesGenerator';

export abstract class PhaserAnimationCreator {

  protected readonly textureKey: string;
  protected readonly animationManager: Phaser.Animations.AnimationManager;
  protected readonly characterAnimationFramesGenerator: PhaserCharacterAnimationFramesGenerator;

  protected constructor(animationManager: Phaser.Animations.AnimationManager, textureKey: string) {
    this.animationManager = animationManager;
    this.textureKey = textureKey;
    this.characterAnimationFramesGenerator = new PhaserCharacterAnimationFramesGenerator();
  }

  abstract createAnimations();

  protected createAnimation(key: string, frames: number[], duration: number, animationManager: Phaser.Animations.AnimationManager, textureKey: string): void {
    animationManager.create({
      key,
      frames: animationManager.generateFrameNumbers(textureKey, {frames}),
      duration,
      repeat: 0
    });
  }
}
