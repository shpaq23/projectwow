import { PhaserAnimationFramesGenerator } from './PhaserAnimationFramesGenerator';

export abstract class PhaserAnimationCreator {

  protected readonly textureKey: string;
  protected readonly animationManager: Phaser.Animations.AnimationManager;
  protected readonly animationFramesGenerator: PhaserAnimationFramesGenerator;

  protected constructor(animationManager: Phaser.Animations.AnimationManager,
                        textureKey: string, animationFramesGenerator: PhaserAnimationFramesGenerator) {
    this.animationManager = animationManager;
    this.textureKey = textureKey;
    this.animationFramesGenerator = animationFramesGenerator;
  }

  abstract createAnimations();

  protected createAnimation(key: string, frames: number[], duration: number,
                            animationManager: Phaser.Animations.AnimationManager, textureKey: string): void {
    animationManager.create({
      key,
      frames: animationManager.generateFrameNumbers(textureKey, {frames}),
      duration,
      repeat: 0
    });
  }
}
