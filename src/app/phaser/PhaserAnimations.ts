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
    const frameRate = 12;

    this.animationManager.create({
      key: 'moveUp',
      frames: this.animationManager.generateFrameNumbers('character', {frames: moveUpFrames}),
      frameRate,
      repeat: -1
    });

    this.animationManager.create({
      key: 'moveDown',
      frames: this.animationManager.generateFrameNumbers('character', {frames: moveDownFrames}),
      frameRate,
      repeat: -1
    });

    this.animationManager.create({
      key: 'moveLeft',
      frames: this.animationManager.generateFrameNumbers('character', {frames: moveLeftFrames}),
      frameRate,
      repeat: -1
    });

    this.animationManager.create({
      key: 'moveRight',
      frames: this.animationManager.generateFrameNumbers('character', {frames: moveRightFrames}),
      frameRate,
      repeat: -1
    });
  }

  createCharacterAttackAnimations(): void {

  }
}
