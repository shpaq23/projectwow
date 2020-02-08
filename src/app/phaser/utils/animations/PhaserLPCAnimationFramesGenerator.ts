import { PhaserAnimationFramesGenerator } from './PhaserAnimationFramesGenerator';

export class PhaserLPCAnimationFramesGenerator extends PhaserAnimationFramesGenerator {

  static SPRITES_IN_ROW = 13;
  static NUMBER_OF_ROWS = 21;

  static MOVE_ANIMATION_LENGTH = 9;
  static ATTACK_ANIMATION_LENGTH = 6;

  static STAND_UP_FRAME = 8 * PhaserLPCAnimationFramesGenerator.SPRITES_IN_ROW;
  static STAND_LEFT_FRAME = 9 * PhaserLPCAnimationFramesGenerator.SPRITES_IN_ROW;
  static STAND_DOWN_FRAME = 10 * PhaserLPCAnimationFramesGenerator.SPRITES_IN_ROW;
  static STAND_RIGHT_FRAME = 11 * PhaserLPCAnimationFramesGenerator.SPRITES_IN_ROW;

  getMoveUpAnimationFrames(): number[] {
    const animationRow = 8;
    return this.generateFrames(PhaserLPCAnimationFramesGenerator.MOVE_ANIMATION_LENGTH, animationRow);
  }

  getMoveLeftAnimationFrames(): number[] {
    const animationRow = 9;
    return this.generateFrames(PhaserLPCAnimationFramesGenerator.MOVE_ANIMATION_LENGTH, animationRow);
  }

  getMoveDownAnimationFrames(): number[] {
    const animationRow = 10;
    return this.generateFrames(PhaserLPCAnimationFramesGenerator.MOVE_ANIMATION_LENGTH, animationRow);
  }

  getMoveRightAnimationFrames(): number[] {
    const animationRow = 11;
    return this.generateFrames(PhaserLPCAnimationFramesGenerator.MOVE_ANIMATION_LENGTH, animationRow);
  }

  getAttackUpAnimationFrames(): number[] {
    const animationRow = 12;
    return this.generateFrames(PhaserLPCAnimationFramesGenerator.ATTACK_ANIMATION_LENGTH, animationRow);
  }

  getAttackLeftAnimationFrames(): number[] {
    const animationRow = 13;
    return this.generateFrames(PhaserLPCAnimationFramesGenerator.ATTACK_ANIMATION_LENGTH, animationRow);
  }

  getAttackDownAnimationFrames(): number[] {
    const animationRow = 14;
    return this.generateFrames(PhaserLPCAnimationFramesGenerator.ATTACK_ANIMATION_LENGTH, animationRow);
  }

  getAttackRightAnimation(): number[] {
    const animationRow = 15;
    return this.generateFrames(PhaserLPCAnimationFramesGenerator.ATTACK_ANIMATION_LENGTH, animationRow);
  }

  private generateFrames(animationLength: number, animationRow: number): number[] {
    const frames: number[] = [];
    const startFrame = (animationRow * PhaserLPCAnimationFramesGenerator.SPRITES_IN_ROW);
    for (let i = startFrame; i < (startFrame + animationLength); i++) {
      frames.push(i);
    }
    return frames;
  }
}
